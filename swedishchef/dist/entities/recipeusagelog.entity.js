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
exports.RecipeUsageLog = void 0;
const typeorm_1 = require("typeorm");
const recipe_entity_1 = require("./recipe.entity");
const household_entity_1 = require("../household/entities/household.entity");
let RecipeUsageLog = class RecipeUsageLog {
};
exports.RecipeUsageLog = RecipeUsageLog;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RecipeUsageLog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => recipe_entity_1.Recipe, (recipe) => recipe.id),
    __metadata("design:type", recipe_entity_1.Recipe)
], RecipeUsageLog.prototype, "recipe_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => household_entity_1.Household, (household) => household.id),
    __metadata("design:type", household_entity_1.Household)
], RecipeUsageLog.prototype, "household_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], RecipeUsageLog.prototype, "cooked_at", void 0);
exports.RecipeUsageLog = RecipeUsageLog = __decorate([
    (0, typeorm_1.Entity)()
], RecipeUsageLog);
//# sourceMappingURL=recipeusagelog.entity.js.map