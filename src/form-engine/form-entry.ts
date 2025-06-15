import { Signal } from '@angular/core';

interface BaseEntry<T = unknown> {
  type: string;
  label?: string;
  name?: string;
  description?: string;
  id: string;
  value?: T;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  options?: Array<{ label: string; value: T }>;
  placeholder?: string;
  errors?: string[];
  helpText?: string;
  htmlValidations: {
    required?: boolean;
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    step?: number;
  }
}

export type FormEntry<T = unknown> = Signal<BaseEntry<T>>
