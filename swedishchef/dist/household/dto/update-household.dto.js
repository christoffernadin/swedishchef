"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHouseholdDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_household_dto_1 = require("./create-household.dto");
class UpdateHouseholdDto extends (0, mapped_types_1.PartialType)(create_household_dto_1.CreateHouseholdDto) {
}
exports.UpdateHouseholdDto = UpdateHouseholdDto;
//# sourceMappingURL=update-household.dto.js.map