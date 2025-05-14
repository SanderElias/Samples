import { Injectable } from '@angular/core';
import { of, timer } from 'rxjs';
import { delay, map, mergeMap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  /** load quotes from a local function. */
  quotes$ = of(quotes()).pipe(
    /** Delay the stream to simulate initial load */
    delay(2500),
    shareReplay(1)
  );

  /** helper to get the length */
  quoteLength$ = this.quotes$.pipe(
    map(list => list.length),
    shareReplay(1)
  );

  /** helper function to extract a single quote out off the array */
  quoteObs = (idx: number) => this.quotes$.pipe(map(list => list[idx]));

  /** create an ongoing observable that produces a random quote on a set interval */
  RandomQuoteOnIntervalObs = (time: number) =>
    timer(0, time).pipe(
      mergeMap(() => this.quoteLength$),
      /** use the length to calculate a random one */
      map(length => Math.floor(Math.random() * length)),
      /** use the helper to parse the random one out of the array */
      mergeMap(this.quoteObs)
    );

  constructor() {}
}

/** quotes, as coming from `https://talaikis.com/api/quotes/' */
export interface Quote {
  /** the actual quote */
  quote: string;
  /** the author */
  author: string;
  /** in what category is this quote */
  cat: string;
  /** image that goes with it */
  imgSrc: string;
}

function quotes(): Quote[] {
  return [
    {
      quote: 'A noble spirit embiggens the smallest man.',
      author: 'Jebadiah Springfield',
      cat: 'simpsons',
      imgSrc: 'https://frinkiac.com/img/S07E16/94194.jpg'
    },

    {
      quote: 'My eyes! The goggles do nothing!',
      author: 'Rainier Wolfcastle',
      cat: 'simpsons',
      imgSrc: 'https://frinkiac.com/img/S07E02/966381.jpg'
    },

    {
      quote: "But Marge, valets. For once, maybe someone will call me 'sir' without adding, 'you're making a scene.'",
      author: 'Homer Simpson',
      cat: 'simpsons',
      imgSrc: 'https://frinkiac.com/img/S07E14/1162928.jpg'
    },
    {
      quote: "Um... how can I put this delicately? I don't got enough booze in this place to make you look good.",
      author: 'Moe Szyslak',
      cat: 'simpsons',
      imgSrc: 'https://frinkiac.com/img/S14E09/1093551.jpg'
    },
    {
      quote: 'Why must i fail in every attempt at masonry?',
      author: 'Homer Simpson',
      cat: 'simpsons',
      imgSrc: 'https://frinkiac.com/img/S10E19/313846.jpg'
    },
    {
      quote: "It's all over, people! we don't have a prayer!",
      author: 'Reverend Lovejoy',
      cat: 'simpsons',
      imgSrc: 'https://frinkiac.com/img/S06E14/780879.jpg'
    },
    {
      quote:
        "Look, buddy, your car was upside down when we got here. And as for your grandma, she shouldn't have mouthed off like that!",
      author: 'Homer Simpson',
      cat: 'simpsons',
      imgSrc: 'https://frinkiac.com/img/S05E11/701950.jpg'
    },
    {
      quote:
        'You know the courts might not work anymore but as long as everybody is videotaping everyone else justice will be done.',
      author: 'Marge Simpson',
      cat: 'simpsons',
      imgSrc: 'https://frinkiac.com/img/S06E09/1223154.jpg'
    },
    {
      quote: "Mmm. Alcohol and night swimming. It's a winning combination.",
      author: 'Lenny Leonard',
      cat: 'simpsons',
      imgSrc: 'https://frinkiac.com/img/S12E01/890848.jpg'
    },
    {
      quote: "No, Flanders. It's, uh...a meeting of gay witches for abortion. You wouldn't be interested.",
      author: 'Homer Simpson',
      cat: 'simpsons',
      imgSrc: 'https://frinkiac.com/img/S16E19/676427.jpg'
    },
    {
      quote:
        'Well, all i remember about the last two months is giving a guest lecture at villanova -or maybe it was a street corner.',
      author: 'Barney Gumble',
      cat: 'simpsons',
      imgSrc: 'https://frinkiac.com/img/S09E01/252101.jpg'
    },
    {
      quote: "Look! A blue-collar bar. Oh, Smithers, let's go slumming.",
      author: 'Mr Burns',
      cat: 'simpsons',
      imgSrc: 'https://frinkiac.com/img/S03E11/1085359.jpg'
    },
    {
      quote: "Ah, the mirthless laugh of the damned. Hold your nose, Smithers. We're going in.",
      author: 'Mr Burns',
      cat: 'simpsons',
      imgSrc: 'https://frinkiac.com/img/S03E11/1109416.jpg'
    },
    {
      quote:
        "I'll have you know the contents of that dumpster are private. You stick your nose in, you'll be violating attorney-dumpster confidentiality.",
      author: 'Lionel Hutz',
      cat: 'simpsons',
      imgSrc: 'https://frinkiac.com/img/S06E23/561410.jpg'
    },
    {
      quote: "You got the brains and talent to go as far as you want and when you do I'll be right there to borrow money.",
      author: 'Bart Simpson',
      cat: 'simpsons',
      imgSrc: 'https://frinkiac.com/img/S03E18/1287978.jpg'
    },
    {
      quote: 'Stop. We have reached the limits of what rectal probing can teach us.',
      author: 'Kodos',
      cat: 'simpsons',
      imgSrc: 'https://frinkiac.com/img/S08E01/868033.jpg'
    },
    {
      quote: "I've said it before, and i'll say it again: Democracy simply doesn't work.",
      author: 'Kent Brockman',
      cat: 'simpsons',
      imgSrc: 'https://frinkiac.com/img/S06E14/866081.jpg'
    },
    {
      quote: "Ned, have you thought about one of the other major religions? They're all pretty much the same.",
      author: 'Reverend Lovejoy',
      cat: 'simpsons',
      imgSrc: 'https://frinkiac.com/img/S07E03/1086634.jpg'
    },
    {
      quote: 'Son, we are about to break the surly bonds of gravity and punch the face of God.',
      author: 'Homer Simpson',
      cat: 'simpsons',
      imgSrc: 'https://frinkiac.com/img/S13E06/329871.jpg'
    },
    {
      quote: "Otto, why don't you get some more gas? Here's the credit card.",
      author: 'Seymour Skinner',
      cat: 'simpsons',
      imgSrc: 'https://frinkiac.com/img/S06E21/124907.jpg'
    },
    {
      quote:
        "Ooh, your powers of deduction are exceptional. I simply can't allow you to waste them here when there are so many crimes going unsolved at this very moment. Go! Go! For the good of the city.",
      author: 'Comic Store Guy',
      cat: 'simpsons',
      imgSrc: 'https://frinkiac.com/img/S07E18/195461.jpg'
    },
    {
      quote:
        'The Simpsons have come a long way since an old drunk made humans out of his rabbit characters to pay off his gambling debts.',
      author: 'Troy Maclure',
      cat: 'simpsons',
      imgSrc: 'https://frinkiac.com/img/S07E10/1301249.jpg'
    }
  ];
}
