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