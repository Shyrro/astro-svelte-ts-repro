import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        variant?: ("test1" | "test2" | "test3") | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TestProps = typeof __propDef.props;
export type TestEvents = typeof __propDef.events;
export type TestSlots = typeof __propDef.slots;
export default class Test extends SvelteComponent<TestProps, TestEvents, TestSlots> {
}
export {};
