# Icons! 

I use a few icons in my blog. Right now, this is in my code:

```ts
const icons = {
  TIP: '💡',
  WARNING: '⚠️',
  IMPORTANT: '!',
  NOTE: '🛈',
  UHM: '!?'
};
```

So, yes, I used emojis. Also known as unicode characters. But then I got some feedback that some users didn't see them.
And yes, that makes sense. I didn't think this one trough enough. I fully expected that by now those things would be supported everywhere. But it turns out that some platforms don't support all emojis, and some users have custom fonts that don't include them. So, I decided to switch to using SVG icons instead.

I'm writing this article to document the icons I'm using, and to share the SVG code for them in case anyone else wants to use them.

I found the icons on [iconoir](https://iconoir.com/) and [SVG Repo](https://www.svgrepo.com/) , which let me easily copy-paste the raw svg. I modified them a bit to fit my needs. I also changed the colors to use the colors from OpenProps.

> [!NOTE] how I use a note icon

> [!TIP] how I use a tip icon

> [!WARNING] how I use a warning icon

> [!IMPORTANT] how I use an important icon
 
> [!UHM] how I use an uhm icon


<style>
  :root {
    --icon-color: var(--yellow-6, #f6d32d);
    --icon-accent-color: var(--gray-1, #efede3);
    --icon-contrast-color: var(--gray-10, #080808);
    --icon-note-color: var(--blue-6, #2d9bf6);
  }
</style>

### the tip icon:

<svg width="40px" height="40px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 2L20 3" stroke="var(--icon-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 2L4 3" stroke="var(--icon-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 16L20 15" stroke="var(--icon-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 16L4 15" stroke="var(--icon-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 18H15" stroke="var(--icon-accent-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 21H14" stroke="var(--icon-accent-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.9998 3C7.9997 3 5.95186 4.95029 5.99985 8C6.02324 9.48689 6.4997 10.5 7.49985 11.5C8.5 12.5 9 13 8.99985 15H14.9998C15 13.0001 15.5 12.5 16.4997 11.5001L16.4998 11.5C17.4997 10.5 17.9765 9.48689 17.9998 8C18.0478 4.95029 16 3 11.9998 3Z" stroke="var(--icon-color)" fill="var(--icon-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>

### the warning icon:

<?xml version="1.0" encoding="UTF-8"?><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" stroke-width="3.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.61617 3.6419C10.6736 1.80296 13.3268 1.80296 14.3841 3.6419L22.4271 17.6296C23.4813 19.463 22.1579 21.7504 20.0431 21.7504H3.95721C1.84242 21.7504 0.519055 19.463 1.57322 17.6296L9.61617 3.6419Z" fill="var(--icon-color)"></path><g transform="translate(9, 3.5) scale(0.5)"><circle fill="var(--icon-contrast-color)" cx="6" cy="32" r="3"></circle><path fill="var(--icon-contrast-color)" d="M9 24a3 3 0 1 1-6 0V5a3 3 0 1 1 6 0v19z"></path></g></svg>

### the important icon:

None, just using the `!` character. I couldn't find a good icon for this one, and I think the `!` character is pretty universally understood as a symbol for something important.

<svg width="40px" height="40px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="none"><g transform="translate(12, 0)"><circle fill="var(--icon-color)" cx="6" cy="32" r="3"></circle><path fill="var(--icon-color)" d="M9 24a3 3 0 1 1-6 0V5a3 3 0 1 1 6 0v19z"></path></g></svg>



### the note icon:

<svg width="40px" height="40px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 11.5V16.5" stroke="var(--icon-note-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 7.51L12.01 7.49889" stroke="var(--icon-note-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="var(--icon-note-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>

### the uhm icon:

this is my fallback icon, for when I use an non-exisistent icon. I use it in the "uhm" section, which is for things that I'm not sure about, or that I want to highlight as something that might be wrong. I couldn't find a good icon for this one, so I just 


<svg width="40px" height="40px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="var(--icon-color)" d="M21 27a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3c.603-.006 6-1 6-5c0-2-2-4-5-4c-2.441 0-4 2-4 3a3 3 0 1 1-6 0c0-4.878 4.58-9 10-9c8 0 11 5.982 11 11c0 4.145-2.277 7.313-6.413 8.92c-.9.351-1.79.587-2.587.747V24a3 3 0 0 1-3 3z"></path><circle fill="var(--icon-color)" cx="21" cy="32" r="3"></circle><circle fill="var(--icon-color)" cx="6" cy="32" r="3"></circle><path fill="var(--icon-color)" d="M9 24a3 3 0 1 1-6 0V5a3 3 0 1 1 6 0v19z"></path></g></svg>

##
