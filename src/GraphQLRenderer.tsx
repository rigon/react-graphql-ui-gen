import * as React from "react";

export const GraphQLRenderer: React.FunctionComponent<{
    count: number;
}> = (props: { count: number }) => {
    return <h1>Hi from GraphQLRenderer: {props.count}</h1>;
};
