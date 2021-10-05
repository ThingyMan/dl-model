import viewer from "@/viewer";

/**
 * @type {import("components/Setters/Setters").PropDetails[]}
 */
export const cameraProp = [
    {
        propName: "near",
        label: "Near",
        type: "number",
        min: 0.01,
        step: 0.01,
        onChange: () => viewer.camera.updateProjectionMatrix(),
    },
    {
        propName: "far",
        label: "Far",
        type: "number",
        min: 0.01,
        step: 20,
        onChange: () => viewer.camera.updateProjectionMatrix(),
    },
    {
        propName: "fov",
        label: "FOV",
        type: "slider",
        min: 5,
        max: 175,
        step: 5,
        onChange: () => viewer.camera.updateProjectionMatrix(),
    },
];
