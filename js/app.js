(function() {

	var
	getXPercentOfY = ROCK.NUMBER.getXPercentOfY,
	getXAsPercentOfY = ROCK.NUMBER.getXAsPercentOfY,
	toNearest = ROCK.NUMBER.toHundredth,
	get = ROCK.JQUERY.getNode,
	calculateButton = get("button-01"),
	answer01 = get("answer-01"),
	answer01X = get("answer-01-X"),
	answer01Y = get("answer-01-Y"),
	answer02 = get("answer-02"),
	answer02X = get("answer-02-X"),
	answer02Y = get("answer-02-Y"),
	answer03 = get("answer-03"),
	answer03X = get("answer-03-X"),
	answer03Y = get("answer-03-Y"),
	answer04 = get("answer-04"),
	answer04X = get("answer-04-X"),
	answer04Y = get("answer-04-Y"),
	answer05 = get("answer-05"),
	answer05X = get("answer-05-X"),
	answer05Y = get("answer-05-Y"),
	inputX = get("input-01"),
	inputY = get("input-02"),
	switchButton = get("switch-button"),
	roundCheckbox = get("checkbox-01"),
	calculateButtonClickHandler = function(e) {

		var
		XValue = Number(inputX.val()),
		YValue = Number(inputY.val());

		if(roundCheckbox.prop("checked")) {

			answer01.val(ROCK.NUMBER.toHundredth(getXPercentOfY(XValue, YValue)));

			answer02.val(ROCK.NUMBER.toHundredth(getXAsPercentOfY(XValue, YValue)));

			answer03.val(ROCK.NUMBER.toHundredth(getXAsPercentOfY(YValue-XValue, XValue)));

			answer04.val(ROCK.NUMBER.toHundredth(XValue + getXPercentOfY(XValue, YValue)));

			answer05.val(ROCK.NUMBER.toHundredth(XValue - getXPercentOfY(XValue, YValue)));

		}
		else {

			answer01.val(getXPercentOfY(XValue, YValue));

			answer02.val(getXAsPercentOfY(XValue, YValue));

			answer03.val(getXAsPercentOfY(YValue-XValue, XValue));

			answer04.val((XValue + getXPercentOfY(XValue, YValue)));

			answer05.val((XValue - getXPercentOfY(XValue, YValue)));

		};

		answer01X.html(XValue);
		answer02X.html(XValue);
		answer03X.html(XValue);
		answer04X.html(XValue);
		answer05X.html(XValue);

		answer01Y.html(YValue);
		answer02Y.html(YValue);
		answer03Y.html(YValue);
		answer04Y.html(YValue);
		answer05Y.html(YValue);

		e&&e.preventDefault&&e.preventDefault();
		return false;

	},
	switchButtonClickHandler = function(e) {

		var
		XValue = Number(inputX.val()),
		YValue = Number(inputY.val());

		inputX.val(YValue);
		inputY.val(XValue);

		calculateButtonClickHandler();

		e.preventDefault();

	},
	roundCheckboxChangeHandler = function() {

		calculateButtonClickHandler();

	};

	switchButton.on("click", switchButtonClickHandler);

	calculateButton.on("click", calculateButtonClickHandler);

	roundCheckbox.on("change", roundCheckboxChangeHandler);

	calculateButtonClickHandler();

	window.pxToEm = function(base, size) {

		return ROCK.NUMBER.toHundredth(getXAsPercentOfY(size, base)/100, 1000);

	};

})();
