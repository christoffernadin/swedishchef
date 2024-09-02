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
exports.RecipeRating = void 0;
const typeorm_1 = require("typeorm");
const recipe_entity_1 = require("./recipe.entity");
const user_entity_1 = require("../users/entities/user.entity");
let RecipeRating = class RecipeRating {
};
exports.RecipeRating = RecipeRating;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RecipeRating.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => recipe_entity_1.Recipe, (recipe) => recipe.id),
    __metadata("design:type", recipe_entity_1.Recipe)
], RecipeRating.prototype, "recipe_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id),
    __metadata("design:type", user_entity_1.User)
], RecipeRating.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RecipeRating.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], RecipeRating.prototype, "created_at", void 0);
exports.RecipeRating = RecipeRating = __decorate([
    (0, typeorm_1.Entity)()
], RecipeRating);
//# sourceMappingURL=reciperatings.entity.js.map