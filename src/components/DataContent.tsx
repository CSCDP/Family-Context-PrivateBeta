import React from 'react';
import { RequestResult } from '../clients/ApiClient';

interface DataContentProps {
    result: RequestResult<{}> | undefined | null,
    loading?: React.ReactNode,
    error?: React.ReactNode,
    children: React.ReactNode
}

const DataContent: React.FC<DataContentProps> = (props: DataContentProps) => {
    if (!props.result){
        return <>{props.loading}</>;
    }
    else if (!props.result.success){
        return <>{props.error}</>;
    }
    return <>{props.children}</>;
}

export default DataContent;