import { useSelector, TypedUseSelectorHook } from "react-redux";

import { RootState } from "../state";

export const useTypedSelectory: TypedUseSelectorHook<RootState> = useSelector;
