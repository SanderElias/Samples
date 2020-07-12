export interface Links {
    self: string;
    web: string;
}

export interface WebImage {
    guid: string;
    offsetPercentageX: number;
    offsetPercentageY: number;
    width: number;
    height: number;
    url: string;
}

export interface HeaderImage {
    guid: string;
    offsetPercentageX: number;
    offsetPercentageY: number;
    width: number;
    height: number;
    url: string;
}

export interface ArtObject {
    links: Links;
    id: string;
    objectNumber: string;
    title: string;
    hasImage: boolean;
    principalOrFirstMaker: string;
    longTitle: string;
    showImage: boolean;
    permitDownload: boolean;
    webImage: WebImage;
    headerImage: HeaderImage;
    productionPlaces: string[];
}

export interface CollectionObject {
    elapsedMilliseconds: number;
    count: number;
    artObjects: ArtObject[];
}

export declare namespace RakiObject {
    export interface ColorsWithNormalization {
        originalHex: string;
        normalizedHex: string;
    }

    export interface PrincipalMaker {
        name: string;
        unFixedName: string;
        placeOfBirth: string;
        dateOfBirth: string;
        dateOfBirthPrecision?: any;
        dateOfDeath: string;
        dateOfDeathPrecision?: any;
        placeOfDeath: string;
        occupation: string[];
        roles: string[];
        nationality: string;
        biography?: any;
        productionPlaces: any[];
        qualification?: any;
    }

    export interface Acquisition {
        method?: any;
        date: Date;
        creditLine: string;
    }

    export interface Dating {
        presentingDate: string;
        sortingDate: number;
        period: number;
    }

    export interface Classification {
        iconClassIdentifier: string[];
        iconClassDescription: string[];
        motifs: any[];
        events: any[];
        periods: any[];
        places: any[];
        people: string[];
        objectNumbers: string[];
    }

    export interface Dimension {
        unit: string;
        type: string;
        part?: any;
        value: string;
    }

    export interface Label {
        title: string;
        makerLine: string;
        description: string;
        notes?: any;
        date: string;
    }

    export interface ArtDetailObject {
        links: Links;
        id: string;
        priref: string;
        objectNumber: string;
        language: string;
        title: string;
        copyrightHolder?: any;
        webImage: WebImage;
        colors: string[];
        colorsWithNormalization: ColorsWithNormalization[];
        normalizedColors: string[];
        normalized32Colors: any[];
        titles: string[];
        description: string;
        labelText?: any;
        objectTypes: string[];
        objectCollection: string[];
        makers: any[];
        principalMakers: PrincipalMaker[];
        plaqueDescriptionDutch: string;
        plaqueDescriptionEnglish?: any;
        principalMaker: string;
        artistRole?: any;
        associations: any[];
        acquisition: Acquisition;
        exhibitions: any[];
        materials: string[];
        techniques: any[];
        productionPlaces: any[];
        dating: Dating;
        classification: Classification;
        hasImage: boolean;
        historicalPersons: string[];
        inscriptions: any[];
        documentation: string[];
        catRefRPK: any[];
        principalOrFirstMaker: string;
        dimensions: Dimension[];
        physicalProperties: any[];
        physicalMedium: string;
        longTitle: string;
        subTitle: string;
        scLabelLine: string;
        label: Label;
        showImage: boolean;
        location: string;
    }

    export interface AdlibOverrides {
        titel?: any;
        maker?: any;
        etiketText?: any;
    }

    export interface ArtObjectPage {
        id: string;
        similarPages: any[];
        lang: string;
        objectNumber: string;
        tags: any[];
        plaqueDescription: string;
        audioFile1?: any;
        audioFileLabel1?: any;
        audioFileLabel2?: any;
        createdOn: Date;
        updatedOn: Date;
        adlibOverrides: AdlibOverrides;
    }

    export interface RootObject {
        elapsedMilliseconds: number;
        artObject: ArtDetailObject;
        artObjectPage: ArtObjectPage;
    }
}
