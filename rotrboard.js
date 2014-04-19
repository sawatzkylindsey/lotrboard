var BOARD_LENGTH = 13;
var COLOUR_GRASS = "#D6F587";//"#CFED55";
var COLOUR_WATER = "#7ECEED";
var COLOUR_MARSH = "#73F588";
var COLOUR_DEADLAND = "#999C46";


var grid;

window.onload = function() {
    set_board_parameters(15, 2);
    grid = make_rotr();
    drawboard(grid, BOARD_LENGTH);
}

function make_rotr() {
    var grid = make_grid();

    for (var i = 0; i < grid.length; i++) {
        var cell = grid[i];

        if (is_water(cell)) {
            cell.colour = COLOUR_WATER;
        }
        else if (is_marsh(cell)) {
            cell.colour = COLOUR_MARSH;
        }
        else if (is_deadland(cell)) {
            cell.colour = COLOUR_DEADLAND;
        }
        else {
            cell.colour = COLOUR_GRASS;
        }
    }

    return grid;
}

function make_grid() {
    var grid = [];

    for (var x = 0; x < board_width(BOARD_LENGTH); x++ ) {
        for (var y = 0; y < board_height(BOARD_LENGTH); y++) {
            if (in_board_space(x, y, BOARD_LENGTH)) {
                grid.push({
                    "x": x,
                    "y": y,
                });
            }
        }
    }

    return grid;
}

function is_deadland(cell) {
    if (cell.x >= 14 && cell.x <= 19 && cell.y == 14) {
        return true;
    }

    if (cell.x >= 13 && cell.x <= 18 && cell.y == 15) {
        return true;
    }

    if (cell.x >= 13 && cell.x <= 18 && cell.y == 16) {
        return true;
    }

    if (cell.x >= 11 && cell.x <= 16 && cell.y == 17) {
        return true;
    }

    if (cell.x >= 12 && cell.x <= 15 && cell.y == 18) {
        return true;
    }

    if (cell.x >= 11 && cell.x <= 13 && cell.y == 19) {
        return true;
    }

    if (cell.x >= 11 && cell.x <= 12 && cell.y == 20) {
        return true;
    }

    return false;
}

function is_marsh(cell) {
    if (cell.x == 13 && cell.y >= 22 && cell.y <= 23) {
        return true;
    }

    if (cell.x == 14 && cell.y == 22) {
        return true;
    }

    return false;
}

function is_water(cell) {
    // left/west ocean
    if (cell.x <= 1) {
        return true;
    }

    if (cell.x == 2 && cell.y <= 16) {
        return true;
    }

    if (cell.x == 3 && cell.y <= 14) {
        return true;
    }

    if (cell.x == 4 && cell.y <= 12) {
        return true;
    }

    if (cell.x == 5 && cell.y <= 11) {
        return true;
    }

    if (cell.x == 6 && cell.y <= 8) {
        return true;
    }

    if (cell.x == 7 && cell.y <= 7) {
        return true;
    }

    if (cell.x == 8 && cell.y <= 5) {
        return true;
    }

    if (cell.x == 9 && cell.y == 3) {
        return true;
    }

    if (cell.x == 10 && cell.y <= 3) {
        return true;
    }

    if (cell.x == 11 && cell.y <= 2) {
        return true;
    }

    if (cell.x == 12 && cell.y <= 1) {
        return true;
    }

    if (cell.x <= 17 && cell.y == 0) {
        return true;
    }

    // bottom ocean
    if (cell.x <= 9 && cell.y >= 23) {
        return true;
    }

    if (cell.x >= 7 && cell.x <= 10 && cell.y == 22) {
        return true;
    }

    if (cell.x == 9 && cell.y == 21) {
        return true;
    }

    if (cell.x == 10 && cell.y == 23) {
        return true;
    }

    // morder lake
    if (cell.x >= 14 && cell.x <= 15 && cell.y == 19) {
        return true;
    }

    if (cell.x == 13 && cell.y == 20) {
        return true
    }

    if (cell.x == 16 && cell.y == 18) {
        return true
    }

    // the long lake
    if (cell.x == 23 && cell.y >= 5 && cell.y <= 7) {
        return true;
    }

    return false;
}
