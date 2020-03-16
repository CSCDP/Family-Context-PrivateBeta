export class Text {
    static Search = {
        Heading: process.env.REACT_APP_SEARCH_HEADING ?? 
            "Find Service Involvement",
        Introduction: process.env.REACT_APP_SEARCH_INTRODUCTION ??
            "Please search for an child by name or date of birth, or by cms id."
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