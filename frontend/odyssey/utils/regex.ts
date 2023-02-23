export interface RegExProps {
    pattern: RegExp,
    error: string   //todo - make this international (see i18n docs)?
}

export const regex: {
    email: RegExProps
    code: RegExProps
    password: RegExProps
} = {
    email: {
        pattern: new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-zA-Z0-9-]+)+.[a-zA-Z0-9-]{2,4}$"),
        error: "This email is invalid."
    },
    code: {
        pattern: new RegExp("^[0-9]{6}$"),
        error: "Authentication codes should only contain 6 digits."
    },
    password: {
        pattern: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$"),
        error: "Passwords must contain the following: A capital letter, a lowercase letter, a number, and one of the following (@$!%*?&)."
    }
}