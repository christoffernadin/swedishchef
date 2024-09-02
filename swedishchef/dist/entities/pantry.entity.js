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
exports.Pantry = void 0;
const typeorm_1 = require("typeorm");
const household_entity_1 = require("../household/entities/household.entity");
const ingredient_entity_1 = require("./ingredient.entity");
let Pantry = class Pantry {
};
exports.Pantry = Pantry;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Pantry.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => household_entity_1.Household, (household) => household.id),
    __metadata("design:type", household_entity_1.Household)
], Pantry.prototype, "household_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ingredient_entity_1.Ingredient, (ingredient) => ingredient.id),
    __metadata("design:type", ingredient_entity_1.Ingredient)
], Pantry.prototype, "ingredient_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Pantry.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pantry.prototype, "unit", void 0);
exports.Pantry = Pantry = __decorate([
    (0, typeorm_1.Entity)()
], Pantry);
//# sourceMappingURL=pantry.entity.js.map