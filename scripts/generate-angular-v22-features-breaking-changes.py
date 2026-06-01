#!/usr/bin/env python3
import re
from pathlib import Path

SOURCE = Path('tmp-angular-changelog.md')
TARGET = Path('angular-v22-features-breaking-changes.md')
MIN_MAJOR = 21

RELEASE_HEADER = re.compile(r'^#\s+([0-9]+\.[0-9]+(?:[0-9A-Za-z.-]*))(.*)$')
FEATURE_ROW = re.compile(r'^\|\s*\[([0-9a-f]{7,40})\].*\|\s*feat\s*\|\s*(.*)$', re.IGNORECASE)


def normalize_release_title(version: str, suffix: str) -> str:
    return f'{version}{suffix}'.strip()


def truncate_changelog_to_major(text: str, min_major: int) -> str:
    lines = text.splitlines()
    chunks = []
    current = []
    current_major = None

    for line in lines:
        release_match = RELEASE_HEADER.match(line)
        if release_match:
            if current_major is not None and current_major >= min_major:
                chunks.extend(current)
            version = release_match.group(1).strip()
            current_major = int(version.split('.')[0])
            current = [line]
            continue
        if current is not None:
            current.append(line)

    if current_major is not None and current_major >= min_major:
        chunks.extend(current)

    return '\n'.join(chunks).rstrip() + '\n'


def is_stable_promotion(text: str) -> bool:
    return bool(re.search(r'\b(?:promote|promoted|promoting|mark|marked)\b.*\bstable\b', text, re.IGNORECASE))


def parse_changelog(text: str):
    lines = text.splitlines()
    releases = []
    current = None
    in_break_section = False
    break_category = None
    current_break_item = None
    i = 0

    def flush_break_item():
        nonlocal current_break_item
        if current_break_item is None:
            return
        current['breakings'].append(' '.join(current_break_item).strip())
        current_break_item = None

    while i < len(lines):
        line = lines[i]
        release_match = RELEASE_HEADER.match(line)
        if release_match:
            if current is not None:
                flush_break_item()
                releases.append(current)
            version = release_match.group(1).strip()
            suffix = release_match.group(2).strip()
            current = {
                'title': normalize_release_title(version, suffix),
                'version': version,
                'features': [],
                'breakings': [],
            }
            in_break_section = False
            break_category = None
            current_break_item = None
            i += 1
            continue

        if current is None:
            i += 1
            continue

        if re.match(r'^##\s*Breaking Changes', line):
            in_break_section = True
            break_category = None
            current_break_item = None
            i += 1
            continue

        if in_break_section and re.match(r'^##\s+', line):
            flush_break_item()
            in_break_section = False
            break_category = None
            i += 1
            continue

        if in_break_section:
            cat_match = re.match(r'^###(?:\s+(.*))?$', line)
            if cat_match:
                flush_break_item()
                category_text = cat_match.group(1)
                if not category_text:
                    in_break_section = False
                    break_category = None
                    current_break_item = None
                    i += 1
                    continue
                break_category = category_text.strip()
                i += 1
                continue

            bullet_match = re.match(r'^\s*-\s+(.*)$', line)
            if bullet_match:
                flush_break_item()
                text_part = bullet_match.group(1).strip()
                if break_category:
                    text_part = f'{break_category}: {text_part}'
                current_break_item = [text_part]
                i += 1
                continue

            if current_break_item is not None and line.strip():
                current_break_item.append(line.strip())
            i += 1
            continue

        # parse feature table rows and multiline rows
        if line.startswith('|') and '[0x' not in line:
            row = line.strip()
            j = i + 1
            while j < len(lines) and not lines[j].startswith('|') and not lines[j].startswith('#') and not lines[j].startswith('##') and not lines[j].startswith('###') and not lines[j].startswith('<'):
                if lines[j].strip():
                    row += ' ' + lines[j].strip()
                j += 1
            row = row.rstrip('| ').strip()
            feature_match = FEATURE_ROW.match(row)
            if feature_match:
                sha = feature_match.group(1)[:10]
                description = feature_match.group(2).strip()
                current['features'].append((sha, description))
            i = j
            continue

        i += 1

    if current is not None:
        flush_break_item()
        releases.append(current)

    return releases


def format_markdown(releases):
    total_features = sum(len(release['features']) for release in releases if int(release['version'].split('.')[0]) >= MIN_MAJOR)
    total_breakings = sum(len(release['breakings']) for release in releases if int(release['version'].split('.')[0]) >= MIN_MAJOR)
    total_stable_promotions = sum(
        1
        for release in releases
        if int(release['version'].split('.')[0]) >= MIN_MAJOR
        for _, desc in release['features']
        if is_stable_promotion(desc)
    ) + sum(
        1
        for release in releases
        if int(release['version'].split('.')[0]) >= MIN_MAJOR
        for item in release['breakings']
        if is_stable_promotion(item)
    )

    lines = [
        '# Angular v21+ Features and Breaking Changes',
        '> Generated from angular/angular `CHANGELOG.md` (main branch).',
        '> Only releases from v21 and later are included.',
        f'> Summary: {total_features} new features, {total_breakings} breaking changes, {total_stable_promotions} stable promotions.',
        '',
        '## New features since v21',
        '',
    ]
    for release in releases:
        major = int(release['version'].split('.')[0])
        if major < MIN_MAJOR:
            continue
        if not release['features']:
            continue
        lines.append(f"### {release['title']}")
        lines.append('')
        for sha, desc in release['features']:
            lines.append(f'- [{sha}](https://github.com/angular/angular/commit/{sha}) — {desc}')
        lines.append('')

    lines.append('## Breaking changes since v21')
    lines.append('')
    for release in releases:
        major = int(release['version'].split('.')[0])
        if major < MIN_MAJOR:
            continue
        if not release['breakings']:
            continue
        lines.append(f"### {release['title']}")
        lines.append('')
        for item in release['breakings']:
            lines.append(f'- {item}')
        lines.append('')

    return '\n'.join(lines).rstrip() + '\n'


def main():
    text = SOURCE.read_text('utf-8')
    text = truncate_changelog_to_major(text, MIN_MAJOR)
    releases = parse_changelog(text)
    content = format_markdown(releases)
    TARGET.write_text(content, encoding='utf-8')
    print(f'Wrote {TARGET} ({len(content.splitlines())} lines)')


if __name__ == '__main__':
    main()
