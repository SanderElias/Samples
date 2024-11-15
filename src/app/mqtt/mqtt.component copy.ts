import { Component, Injectable, inject, signal, OnDestroy } from '@angular/core';
import { type OnMessageCallback } from 'mqtt';
import {
  Observable,
  ReplaySubject,
  Subject,
  filter,
  map,
  repeat,
  share,
  switchMap,
  takeUntil,
  tap,
  timer,
} from 'rxjs';
import { observableComputed } from '../signal-utils';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-mqtt',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './mqtt.component.html',
  styleUrl: './mqtt.component.css',
})
export class MqttComponent implements OnDestroy {
  mqtt = inject(MqttService);

  button$ = this.mqtt.listenFor('LichtknopBuro/action').pipe(
    share(),
    tap((msg) => console.log(msg)),
  );
  lamp$ = this.mqtt
    .listenFor('Buro licht panel')
    .pipe(tap((msg) => console.log(msg)))
    .subscribe();
  brightDown_down$ = this.button$.pipe(filter((msg) => msg === 'brightness_down_hold'));
  brightDown_up$ = this.button$.pipe(filter((msg) => msg === 'brightness_down_release'));

  $state = observableComputed<Z2MDevices[]>(() => this.mqtt.listenFor('bridge/devices').pipe(map((s) => JSON.parse(s) as Z2MDevices[]),tap(console.log)));

  sub = this.brightDown_down$
    .pipe(
      switchMap(() => timer(0, 100)),
      takeUntil(this.brightDown_up$),
      repeat(),
    )
    .subscribe((data) => {
      console.log(data);
    });

  ngOnDestroy() {
    this.sub.unsubscribe()
    this.lamp$.unsubscribe()
  }
}

interface MqttMessage {
  topic: string;
  message: string;
}
