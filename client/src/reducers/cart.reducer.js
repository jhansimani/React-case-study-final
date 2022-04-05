const cartObject = {
  addedProducts: [],
  grandTotal: 0,
  totalItems: 0,
};

export function cart(defaultStore = cartObject, action) {
  let index;

  function calculateGrandTotal() {
    let grandTotal = defaultStore.addedProducts.reduce(
      (previous, currentProduct) => {
        return previous + currentProduct.totalPrice;
      },
      0
    );
    return grandTotal;
  }

  function calculateTotalItems() {
    let totalItems = defaultStore.addedProducts.reduce(
      (previous, currentProduct) => {
        return previous + currentProduct.quantity;
      },
      0
    );
    return totalItems;
  }

  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      let updatedProduct = {
        ...action.theProduct,
        quantity: 1,
        totalPrice: action.theProduct.price * 1,
      };
      if (defaultStore.addedProducts.length === 0) {
        return {
          addedProducts: [...defaultStore.addedProducts, updatedProduct],
          grandTotal: updatedProduct.totalPrice,
          totalItems: updatedProduct.quantity,
        };
      } else {
        index = defaultStore.addedProducts.findIndex((item) => {
          return item.id === action.theProduct.id;
        });
        if (index !== -1) {
          defaultStore.addedProducts = [
            ...defaultStore.addedProducts.slice(0, index),
            {
              ...defaultStore.addedProducts[index],
              quantity: defaultStore.addedProducts[index].quantity + 1,
              totalPrice:
                defaultStore.addedProducts[index].totalPrice +
                defaultStore.addedProducts[index].price,
            },
            ...defaultStore.addedProducts.slice(index + 1),
          ];
          return {
            addedProducts: [...defaultStore.addedProducts],
            grandTotal: calculateGrandTotal(),
            totalItems: calculateTotalItems(),
          };
        } else {
          return {
            addedProducts: [...defaultStore.addedProducts, updatedProduct],
            grandTotal: defaultStore.grandTotal + updatedProduct.totalPrice,
            totalItems: defaultStore.totalItems + updatedProduct.quantity,
          };
        }
      }
      break;
    case "DELETE_ITEM_FROM_CART":
      index = defaultStore.addedProducts.findIndex((item) => {
        return item.id === action.theProductId;
      });
      defaultStore.addedProducts = [
        ...defaultStore.addedProducts.slice(0, index),
        ...defaultStore.addedProducts.slice(index + 1),
      ];
      return {
        addedProducts: [...defaultStore.addedProducts],
        grandTotal: calculateGrandTotal(),
        totalItems: calculateTotalItems(),
      };
      break;
    case "INCREMENT_QUANTITY_OF_ITEM":
      index = defaultStore.addedProducts.findIndex((item) => {
        return item.id === action.theProductId;
      });
      defaultStore.addedProducts = [
        ...defaultStore.addedProducts.slice(0, index),
        {
          ...defaultStore.addedProducts[index],
          quantity: defaultStore.addedProducts[index].quantity + 1,
          totalPrice:
            defaultStore.addedProducts[index].totalPrice +
            defaultStore.addedProducts[index].price,
        },
        ...defaultStore.addedProducts.slice(index + 1),
      ];
      return {
        addedProducts: [...defaultStore.addedProducts],
        grandTotal: calculateGrandTotal(),
        totalItems: calculateTotalItems(),
      };

      break;
    case "DECREMENT_QUANTITY_OF_ITEM":
      index = defaultStore.addedProducts.findIndex((item) => {
        return item.id === action.theProductId;
      });
      let quantity = defaultStore.addedProducts[index].quantity - 1;
      if (quantity === 0) {
        defaultStore.addedProducts = [
          ...defaultStore.addedProducts.slice(0, index),
          ...defaultStore.addedProducts.slice(index + 1),
        ];
        return {
          addedProducts: [...defaultStore.addedProducts],
          grandTotal: calculateGrandTotal(),
          totalItems: calculateTotalItems(),
        };
      } else {
        defaultStore.addedProducts = [
          ...defaultStore.addedProducts.slice(0, index),
          {
            ...defaultStore.addedProducts[index],
            quantity: defaultStore.addedProducts[index].quantity - 1,
            totalPrice:
              defaultStore.addedProducts[index].totalPrice -
              defaultStore.addedProducts[index].price,
          },
          ...defaultStore.addedProducts.slice(index + 1),
        ];
        return {
          addedProducts: [...defaultStore.addedProducts],
          grandTotal: calculateGrandTotal(),
          totalItems: calculateTotalItems(),
        };
      }

      break;
    default:
      return defaultStore;
  }
}
