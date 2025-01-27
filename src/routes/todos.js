"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express_1 = require("express");
var db_1 = require("../db");
var router = (0, express_1.Router)();
// ---------------------
// CREATE a new todo
// ---------------------
router.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, completed, result, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, title = _a.title, completed = _a.completed;
                return [4 /*yield*/, db_1.pool.query("INSERT INTO todos (title, completed)\n       VALUES ($1, $2)\n       RETURNING *", [title, completed])];
            case 1:
                result = _b.sent();
                return [2 /*return*/, res.status(201).json(result.rows[0])];
            case 2:
                error_1 = _b.sent();
                console.error(error_1);
                return [2 /*return*/, res.status(500).json({ error: 'Internal server error' })];
            case 3: return [2 /*return*/];
        }
    });
}); });
// ---------------------
// READ all todos
// ---------------------
router.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, db_1.pool.query('SELECT * FROM todos ORDER BY id ASC')];
            case 1:
                result = _a.sent();
                return [2 /*return*/, res.json(result.rows)];
            case 2:
                error_2 = _a.sent();
                console.error(error_2);
                return [2 /*return*/, res.status(500).json({ error: 'Internal server error' })];
            case 3: return [2 /*return*/];
        }
    });
}); });
// ---------------------
// READ one todo by id
// ---------------------
router.get('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, db_1.pool.query('SELECT * FROM todos WHERE id = $1', [id])];
            case 1:
                result = _a.sent();
                if (result.rows.length === 0) {
                    return [2 /*return*/, res.status(404).json({ error: 'Todo not found' })];
                }
                return [2 /*return*/, res.json(result.rows[0])];
            case 2:
                error_3 = _a.sent();
                console.error(error_3);
                return [2 /*return*/, res.status(500).json({ error: 'Internal server error' })];
            case 3: return [2 /*return*/];
        }
    });
}); });
// ---------------------
// UPDATE one todo
// ---------------------
router.put('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, title, completed, result, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                id = req.params.id;
                _a = req.body, title = _a.title, completed = _a.completed;
                return [4 /*yield*/, db_1.pool.query("UPDATE todos\n       SET title = $1, completed = $2\n       WHERE id = $3\n       RETURNING *", [title, completed, id])];
            case 1:
                result = _b.sent();
                if (result.rows.length === 0) {
                    return [2 /*return*/, res.status(404).json({ error: 'Todo not found' })];
                }
                return [2 /*return*/, res.json(result.rows[0])];
            case 2:
                error_4 = _b.sent();
                console.error(error_4);
                return [2 /*return*/, res.status(500).json({ error: 'Internal server error' })];
            case 3: return [2 /*return*/];
        }
    });
}); });
// ---------------------
// DELETE one todo
// ---------------------
router["delete"]('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, db_1.pool.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id])];
            case 1:
                result = _a.sent();
                if (result.rows.length === 0) {
                    return [2 /*return*/, res.status(404).json({ error: 'Todo not found' })];
                }
                return [2 /*return*/, res.status(204).send()]; // 204 No Content
            case 2:
                error_5 = _a.sent();
                console.error(error_5);
                return [2 /*return*/, res.status(500).json({ error: 'Internal server error' })];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports["default"] = router;
