import type Interface from "../Interface/Put.js";

/**
 * @module Put
 *
 */
export const _Function = ((...[Instance]) => {
	if (Instance instanceof Map) {
		const _Value = {} as {
			// biome-ignore lint/suspicious/noExplicitAny:
			[key: string]: any | ReturnType<Interface>;
		};

		for (const [Key, Value] of Instance.entries()) {
			if (Value instanceof Map) {
				_Value[Key] = _Function(Value);
			} else {
				_Value[Key] = Value;
			}
		}

		return _Value;
	}

	return Instance;
}) satisfies Interface as Interface;

export default _Function;
