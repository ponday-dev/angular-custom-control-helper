import { ExistingProvider, forwardRef } from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
    NG_VALIDATORS,
    Validator } from '@angular/forms';

export abstract class CustomValueAccessor<T> implements ControlValueAccessor {
	protected _value: T;
	protected propagateChange = ( _ : any) => { };

	abstract writeValue(value: any);

	registerOnChange(fn: any) {
		this.propagateChange = fn;
	}
	registerOnTouched(fn: any) { }

	get value(): T {
		return this._value;
	}
	set value(value: T) {
		this._value = value;
		this.propagateChange(this._value);
	}
}

export function customControlProviderFactory(component: any): ExistingProvider {
	return {
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => component),
		multi: true
	};
}
export function customValidatorProviderFactory(validator: Validator): ExistingProvider {
	return {
		provide: NG_VALIDATORS,
		useExisting: validator,
		multi: true
	};
}
