exports.calculatePrice = function(total, deliveryOption, deliveryLowerBoundary, deliveryUpperBoundary, deliveryPrice) {

    if (deliveryOption == true) {
        if (total < deliveryLowerBoundary) {
            total = deliveryLowerBoundary
        }

        if (deliveryUpperBoundary != null) {
            if (total < deliveryUpperBoundary) {
                total = total + deliveryPrice;
            }
        }
    }

    return total
}