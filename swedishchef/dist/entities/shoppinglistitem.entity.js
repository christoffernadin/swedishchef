"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingListItem = void 0;
const typeorm_1 = require("typeorm");
const shoppinglist_entity_1 = require("./shoppinglist.entity");
const ingredient_entity_1 = require("./ingredient.entity");
let ShoppingListItem = class ShoppingListItem {
};
exports.ShoppingListItem = ShoppingListItem;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ShoppingListItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => shoppinglist_entity_1.ShoppingList, (shoppingList) => shoppingList.id),
    __metadata("design:type", shoppinglist_entity_1.ShoppingList)
], ShoppingListItem.prototype, "shopping_list_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ingredient_entity_1.Ingredient, (ingredient) => ingredient.id),
    __metadata("design:type", ingredient_entity_1.Ingredient)
], ShoppingListItem.prototype, "ingredient_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ShoppingListItem.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ShoppingListItem.prototype, "unit", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], ShoppingListItem.prototype, "is_purchased", void 0);
exports.ShoppingListItem = ShoppingListItem = __decorate([
    (0, typeorm_1.Entity)()
], ShoppingListItem);
//# sourceMappingURL=shoppinglistitem.entity.js.map