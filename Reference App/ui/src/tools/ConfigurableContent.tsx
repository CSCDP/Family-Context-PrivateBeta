export class Urls {
    static Images = {
        Logo: process.env.REACT_APP_LOGO_URL ? process.env.PUBLIC_URL + "/" + process.env.REACT_APP_LOGO_URL : ""
    }

    static Links = {
        LoginHelp: process.env.REACT_APP_LOGIN_HELP_LINK ?? "",
        FeedbackEmail: process.env.REACT_APP_FEEDBACK_EMAIL ?? ""
    }

    static App = {
        ApiUrl: process.env.REACT_APP_API_BASE_URL ?? "",
        Subdirectory: process.env.REACT_APP_BASE_SUBDIRECTORY ?? ""
    }
}

export class Text {
    static Search = {
        Introduction: process.env.REACT_APP_SEARCH_INTRODUCTION ??
            "Search for a child by name or in known cases their case ID"
    }

    static Header = {
        Title: process.env.REACT_APP_TITLE ?? "Family Context",
        SubHeading: process.env.REACT_APP_SUBTITLE ?? ""
    }
}

export class Error {
    static Search = {
        CaseIdNotFound: process.env.REACT_APP_CASE_NOT_FOUND ??
            "Child not found",
        NoCaseIdEntered: process.env.REACT_APP_CASE_ID_MISSING ??
            "Enter the Case ID",
    }
}
