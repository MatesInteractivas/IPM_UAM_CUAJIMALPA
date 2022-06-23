/*
 * $Id: $
 *
 * Copyright (C) 2012 Stoyan Rachev (stoyanr@gmail.com)
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the
 * Free Software Foundation; either version 2, or (at your option) any
 * later version.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 */

function Tower(num, width, height, xwidth, dropHandler) {
	this.num = num;
	this.width = width;
	this.height = height;
	this.xwidth = xwidth;
	this.dropHandler = dropHandler;
	this.disks = [];
}

Tower.prototype.getNum = function() {
	return this.num;
}

Tower.prototype.getDisks = function() {
	return this.disks;
}

Tower.prototype.getElement = function() {
	return $("#tower" + this.num);
}

Tower.prototype.createElement = function() {
	return $("<div class='tower' id='tower" + this.num + "' width='" + this.width + "' height='" + this.height + "' />");
}


Tower.prototype.init = function() {
	this.setDroppable();
}

Tower.prototype.setDroppable = function() {
	this.getElement().droppable({ drop: this.dropHandler });
}

Tower.prototype.addDisk = function(disk) {
	this.disks.push(disk);
}

Tower.prototype.removeDisk = function(disk) {
	this.disks.splice(this.disks.indexOf(disk), 1);
}

Tower.prototype.canPlaceDisk = function(disk) {
	var result = true;
	if (this.disks.length > 0) {
		var topDisk = this.disks[this.disks.length - 1];
		if (topDisk.getNum() < disk.getNum()) {
			result = false;
		}
	}
	return result;
}

Tower.prototype.moveDisk = function(disk) {
	var oldTower = disk.getTower();
	oldTower.removeDisk(disk);
	this.addDisk(disk);
	disk.setTower(this);
}

Tower.prototype.updateDraggableDisks = function() {
	for (var i = 0; i < this.disks.length; i++) {
		this.disks[i].setDraggable(i == this.disks.length - 1);
	}
}

Tower.prototype.calcDiskTop = function(num) {
	var ele = this.getElement()
	var pos = ele.position();
	var gap = 12;

	var result = pos.top + ele.height() - this.xwidth;
	for (var i = 0; i < this.disks.length; i++) {
		var currDisk = this.disks[i];
		var currDiskE =  currDisk.getElement();
		result -= currDiskE.height()-gap;
		if (num == currDisk.getNum()) {
			result += gap;
			break;
		}
	}
	return result;
}

Tower.prototype.calcDiskLeft = function(width) {
	var ele = this.getElement()
	var pos = ele.position();
	return pos.left + (ele.width() - width)/2;
}
