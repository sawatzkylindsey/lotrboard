var BOARD_LENGTH = 13;

var COLOUR_GRASS = "#D6F587";//"#CFED55";
var COLOUR_WATER = "#7ECEED";
var COLOUR_MARSH = "#73F588";
var COLOUR_DEADLAND = "#999C46";
var COLOUR_ROAD = "#9E6D1E";

var FACE_NW = "face_nw";
var FACE_W = "face_w";
var FACE_SW = "face_sw";
var FACE_SE = "face_se";
var FACE_E = "face_e";
var FACE_NE = "face_ne";
var MIDDLE = "face_middle";

var grid;


window.onload = function() {
    init_signs();
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

        var roads = cell_roads(cell);

        if (roads.length > 0) {
            cell.drawers.push([draw_road, roads]);
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
                    "drawers": [],
                });
            }
        }
    }

    return grid;
}
