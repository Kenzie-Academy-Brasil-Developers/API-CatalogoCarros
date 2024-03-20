const patchCarControllersMock = {
    body: {
        name: "Cadilac",
        description: "automatico",
    },
    expecttedValue: {
        id: expect.any(String),
        name: "Cadilac",
        description: "automatico" || null,
        brand: "Subaru",
        year: 2022,
        km: 1,
    },
};

export { patchCarControllersMock };