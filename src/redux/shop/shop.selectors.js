import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectShopItems],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopItems],
    collections => collections[collectionUrlParam]
);


