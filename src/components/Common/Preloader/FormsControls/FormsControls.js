import './FormControl.css';

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? 'form__error' : ''} >
            <textarea {...input} {...props} />
            {  hasError && <span className="form__message">{meta.error}</span> }
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? 'form__error' : ''} >
            <input {...input} {...props} />
            {  hasError && <span className="form__message">{meta.error}</span> }
        </div>
    )
}