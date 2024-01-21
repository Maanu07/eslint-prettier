type TextInput = {
    labelText: string;
    placeHolderText: string;
    className: string;
};

const TextInput = ({ labelText, placeHolderText, className }: TextInput) => {
    return (
        <div className={className}>
            <label>{labelText}</label>
            <input type="text" placeholder={placeHolderText} />
        </div>
    );
};

export default TextInput;
