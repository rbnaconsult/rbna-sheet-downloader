"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncABC = void 0;
exports.asyncABC = async () => {
    const somethingSlow = (index) => {
        const storage = 'abc'.charAt(index);
        return new Promise((resolve) => 
        // later...
        resolve(storage));
    };
    const a = await somethingSlow(0);
    const b = await somethingSlow(1);
    const c = await somethingSlow(2);
    return [a, b, c];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2FzeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsUUFBUSxHQUFHLEtBQUssSUFBSSxFQUFFO0lBQ2pDLE1BQU0sYUFBYSxHQUFHLENBQUMsS0FBZ0IsRUFBRSxFQUFFO1FBQ3pDLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsT0FBTyxJQUFJLE9BQU8sQ0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ3JDLFdBQVc7UUFDWCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQ2pCLENBQUM7SUFDSixDQUFDLENBQUM7SUFDRixNQUFNLENBQUMsR0FBRyxNQUFNLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxNQUFNLENBQUMsR0FBRyxNQUFNLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxNQUFNLENBQUMsR0FBRyxNQUFNLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNuQixDQUFDLENBQUMifQ==