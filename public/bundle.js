/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/default.ts":
/*!************************!*\
  !*** ./src/default.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDefaultRoutine: () => (/* binding */ createDefaultRoutine)\n/* harmony export */ });\n/* harmony import */ var _oop_Routine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oop/Routine */ \"./src/oop/Routine.ts\");\n/* harmony import */ var _oop_Workout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oop/Workout */ \"./src/oop/Workout.ts\");\n\n\nconst workouts = [\n    new _oop_Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('pushups', 50),\n    new _oop_Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('pullups', 10),\n    new _oop_Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('swing', 75),\n    new _oop_Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('squats', 15),\n    new _oop_Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('carries', 1),\n];\nfunction createDefaultRoutine() {\n    const daily = new _oop_Routine__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    for (const workout of workouts)\n        daily.addWorkout(workout.name, workout.reps);\n    return daily;\n}\n// tracker.routine\n// // tracker.complete(10, 'pushups')\n// tracker.displayWorkouts()\n// daily.workouts.complete(10,'push ups')\n\n\n//# sourceURL=webpack://workout-tracker/./src/default.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _oop_Routine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oop/Routine */ \"./src/oop/Routine.ts\");\n/* harmony import */ var _oop_Tracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oop/Tracker */ \"./src/oop/Tracker.ts\");\n/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default */ \"./src/default.ts\");\n\n\n\nconst workouts = [];\nconst routine = new _oop_Routine__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst defaultR = (0,_default__WEBPACK_IMPORTED_MODULE_2__.createDefaultRoutine)();\nconst tracker = new _oop_Tracker__WEBPACK_IMPORTED_MODULE_1__[\"default\"](defaultR);\nconst main = document.getElementsByTagName('main')[0];\ntracker.displayWorkouts();\nconst addForm = document.getElementById('add-workout-form');\nconst removeForm = document.getElementById('remove-workout-form');\naddForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    getFormData(addForm);\n});\nremoveForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    getFormData(removeForm);\n});\nfunction getFormData(form) {\n    const formData = new FormData(form);\n    console.log(formData);\n    const workoutValue = formData.get(`add-workout`);\n    const removeValue = formData.get(`remove-workout`);\n    if (workoutValue) {\n        const repsValue = parseInt(formData.get(`reps`).toString());\n        tracker.routine.addWorkout(workoutValue.toString(), repsValue);\n    }\n    else\n        tracker.routine.removeWorkout(removeValue.toString());\n    displayWorkouts(tracker.routine.workouts);\n}\ndisplayWorkouts(defaultR.workouts);\nfunction displayWorkouts(workouts) {\n    main.innerHTML = '';\n    for (const workout of Object.values(workouts)) {\n        const div = createWorkoutDiv(workout);\n        main.appendChild(div);\n    }\n}\nfunction createWorkoutDiv(workout) {\n    const div = document.createElement('div');\n    const p = document.createElement('p');\n    updatePText(p, workout);\n    div.append(p);\n    for (const direction of ['-', '+']) {\n        const boxContainer = createButtonFlex();\n        boxContainer.append(document.createElement('br'));\n        for (const label of [10, 5, 1]) {\n            const repButton = createRepButtons(direction, label);\n            repButton.addEventListener('click', () => {\n                adjustReps(workout, parseInt(`${direction}${label}`), p);\n            });\n            boxContainer.appendChild(repButton);\n            div.appendChild(boxContainer);\n        }\n    }\n    return div;\n}\nfunction createRepButtons(direction, quantity = 1) {\n    const repButton = document.createElement('button');\n    repButton.innerText = direction === '+' ? `+${quantity}` : `-${quantity}`;\n    return repButton;\n}\nfunction adjustReps(workout, reps, p) {\n    workout.reps += reps;\n    updatePText(p, workout);\n}\nfunction updatePText(p, workout) {\n    p.innerText = `${workout.name} \r\n  reps: ${workout.reps}`;\n}\nfunction createButtonFlex() {\n    const boxDiv = document.createElement('div');\n    boxDiv.className = 'box-container';\n    boxDiv.style.display = 'flex';\n    boxDiv.style.justifyContent = 'space-between';\n    return boxDiv;\n}\nfunction createWorkoutElement() { }\n// const addWorkoutInput = document.createElement('input')\n// addWorkoutInput.id = 'add-workout'\n// const repsInput = document.createElement('input')\n// repsInput.id = 'add-reps'\n// addForm.insertBefore(addWorkoutInput,addForm.firstChild)\n// const removeWorkoutInput = document.createElement('input')\n// removeWorkoutInput.id = 'remove-workout'\n\n\n//# sourceURL=webpack://workout-tracker/./src/index.ts?");

/***/ }),

/***/ "./src/oop/Routine.ts":
/*!****************************!*\
  !*** ./src/oop/Routine.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Routine)\n/* harmony export */ });\n/* harmony import */ var _Workout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Workout */ \"./src/oop/Workout.ts\");\n\nclass Routine {\n    get workouts() {\n        return this._workouts;\n    }\n    set workouts(value) {\n        this._workouts = value;\n    }\n    constructor() {\n        this._workouts = {};\n    }\n    addWorkout(workout, reps) {\n        this.workouts[workout] = new _Workout__WEBPACK_IMPORTED_MODULE_0__[\"default\"](workout, reps);\n    }\n    removeWorkout(workout) {\n        delete this.workouts[workout];\n    }\n    switchWorkout(oldWorkout, newWorkout, newWorkoutReps) {\n        this.removeWorkout(oldWorkout);\n        this.addWorkout(newWorkout, newWorkoutReps);\n    }\n}\n\n\n//# sourceURL=webpack://workout-tracker/./src/oop/Routine.ts?");

/***/ }),

/***/ "./src/oop/Tracker.ts":
/*!****************************!*\
  !*** ./src/oop/Tracker.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tracker)\n/* harmony export */ });\nclass Tracker {\n    get routine() {\n        return this._routine;\n    }\n    set routine(value) {\n        this._routine = value;\n    }\n    constructor(_routine) {\n        this._routine = _routine;\n    }\n    completeReps(reps, workout) {\n        this.routine.workouts[workout].reps -= reps;\n    }\n    addReps(amount, workout) {\n        this.routine.workouts[workout].reps += amount;\n    }\n    finishWorkOut(workout) {\n        this.routine.workouts[workout].reps = 0;\n    }\n    displayWorkouts() {\n        const workouts = this.routine.workouts;\n        const button = document.createElement('button');\n        button.innerText = 'Test';\n        document.body.appendChild(button);\n        for (const k in workouts)\n            console.log(`${k}: ${workouts[k].reps} `);\n    }\n}\n\n\n//# sourceURL=webpack://workout-tracker/./src/oop/Tracker.ts?");

/***/ }),

/***/ "./src/oop/Workout.ts":
/*!****************************!*\
  !*** ./src/oop/Workout.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Workout)\n/* harmony export */ });\nclass Workout {\n    get reps() {\n        return this._reps;\n    }\n    set reps(value) {\n        this._reps = value;\n    }\n    get name() {\n        return this._name;\n    }\n    set name(value) {\n        this._name = value;\n    }\n    constructor(_name, _reps) {\n        this._name = _name;\n        this._reps = _reps;\n    }\n}\n\n\n//# sourceURL=webpack://workout-tracker/./src/oop/Workout.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;