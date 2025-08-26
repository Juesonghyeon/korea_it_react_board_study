/** @jsxImportSource @emotion/react */
import * as s from "./styles";

function AuthInput({ type, placeholder, state, setState, disabied }) {
	const onChangeHandler = (e) => {
		setState(e.target.value);
	};

	return (
		<>
			<input
				css={s.input}
				type={type}
				value={state}
				placeholder={placeholder}
				onChange={onChangeHandler}
				disabled={disabied}
			/>
		</>
	);
}

export default AuthInput;
