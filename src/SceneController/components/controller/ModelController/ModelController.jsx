import { useState } from "react";
import SelectBox from "components/SelectBox";
import { getControlList, getSelectOptions, Controller } from "./helper";
import QuickAccess from "./QuickAccess";

import "./ModelController.css";

function ModelController({ target, dataKey = "controller" }) {
    const options = getControlList(target);

    const [type, setType] = useState(target.userData[dataKey] ?? options[0]);
    const selectOptions = getSelectOptions(options);

    const handleTypeChange = newType => {
        target.userData[dataKey] = newType;
        setType(newType);
    };

    return (
        <div className="ModelController">
            <QuickAccess
                list={options}
                value={type}
                onChange={handleTypeChange}
            />

            <SelectBox
                options={selectOptions}
                value={type}
                onChange={handleTypeChange}
                fullWidth
                size="small"
            />
            <Controller type={type} target={target} />
        </div>
    );
}

export default ModelController;
