import { afterNextRender, Component, ElementRef, inject } from '@angular/core';

@Component({
  selector: 'se-icon-sprite',
  imports: [],
  template: `
    <p>icon-sprite works!</p>
    <!-- <img src="assets/icons/Ionic-Ionicons-Pause.svg"> -->
    <svg>
      <use href="iconSprite/#assets-icons-cloud-svg"></use>
    </svg>
    <img src="./#use_assets-icons-cloud-svg" alt="">
  `,
  styleUrl: './icon-sprite.component.css',
})
export class IconSpriteComponent {
  elm = inject(ElementRef);
  sprite?: SVGElement;

  loadIntoSprite = afterNextRender(async () => {
    if (!this.elm.nativeElement) return;
    if (!this.sprite) {
      const sprite = (this.sprite = document.createElementNS('http://www.w3.org/2000/svg', 'svg'));
      sprite.id = 'icon-sprite';
      sprite.style.position = 'absolute';
      const style = document.createElement('style');
      style.textContent = `
        use { display: none; }
        use:target { display: block;  }`;
      sprite.appendChild(style);

      document.body.insertBefore(this.sprite, document.body.firstChild);
    }

    await svgToSegment('assets/icons/cloud.svg');
    await svgToSegment('assets/icons/Ionic-Ionicons-Pause.svg');
    await svgToSegment('assets/icons/Ionic-Ionicons-Battery-charging-sharp.svg');
  });
}

async function svgToSegment(assetName: string): Promise<string> {
  const spriteHolder = document.getElementById('icon-sprite') as unknown as SVGElement;
  const id = assetName.replace(/\//g, '-').replace(/\./g, '-').replace(/_/g, '-');
  if (spriteHolder.querySelector(`section#${id}`)) {
    return spriteHolder.querySelector(`section#${id}`)?.outerHTML!;
  }

  const svgText = await fetch(assetName).then(res => res.text());
  const svgElm = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgElm.innerHTML = svgText;
  const orgSvg = svgElm.firstChild as SVGElement;
  const section = document.createElement('symbol');
  const use = document.createElement('use');
  use.setAttribute('id', `use_${id}`);
  use.setAttribute('href', `#${id}`);

  /** move all old nodes into the new section */
  while (orgSvg.childNodes?.length) {
    section.appendChild(orgSvg.childNodes[0]);
  }
  // copy all attributes
  for (let i = 0; i < orgSvg.attributes.length; i++) {
    const attr = orgSvg.attributes[i];
    section.setAttribute(attr.name, attr.value);
  }
  section.id = id;

  spriteHolder.insertBefore(section, spriteHolder.firstChild);
  spriteHolder.appendChild(use);
  console.log(`#${id}`);

  return section.outerHTML;
}
