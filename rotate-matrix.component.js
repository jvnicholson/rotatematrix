(function () {
	'use strict';

	angular.module('app', [])
		.component('rotateMatrix', {
			controller: RotateMatrix,
			templateUrl: 'rotate-matrix.component.html'
		});

	function RotateMatrix() {
		var ctrl = this;

		// Properties
		ctrl.original = [[1,2,3], [4,5,6], [7,8,9]];
		ctrl.rotated = rotate(ctrl.original);
		// Methods


		function rotate(original) {
			var size = original.length;
			var rotated = [['--','--','--'], ['--', '--', '--'], ['--', '--', '--']];

			for(var i = 0; i < size; i++) {
				for(var j = size - 1; j >= 0; j--) {
					rotated[i][size - j - 1] = original[j][i];
				}
			}

			return rotated;
		}
	}
})();
