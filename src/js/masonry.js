(function(window) {

	'use strict';

	var toggleEvent = function(el, name, fn, unbind) {
			var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
			el[methodName](name, fn, false);
		};


	window.MicroMasonryGrid = function(gallery, newOpts) {
		var self = this,
			thumbElements = gallery.childNodes,
			figureEl,
			columnHeights,
			columnItems,
			gridWidth,
			columnWidth,
			i,
			windowHeight,
			galleryRect,
			galleryInitialYOffset,
			numColumns,
			localPageYOffset;


		var opts = self.opts = {
			cols: function(){return 3},
			gap: 10,
			src: 'data-m-src',
			getHeight: function(el, columnWidth) {
				return Math.round( columnWidth / Number(el.getAttribute('data-ratio')) );
			},
			addImage: function(el) {
				var img = new Image();
				// "this" is options object
				
				var srcSet = el.getAttribute('data-m-srcset');
				if(srcSet) {
					img.setAttribute('srcset',srcSet);
				}
				img.src = el.getAttribute(this.src);

				el.children[0].insertBefore(img, el.children[0].firstChild);

				//el.children[0].appendChild(img);
			}
		};

		for (var n in newOpts) { 
			opts[n] = newOpts[n]; 
		}
		
		var itemsToPaint = {},
			totalHeight;

		var calc = function() {
			localPageYOffset = window.pageYOffset;

			// create empty arrays for columns
			columnHeights = [];
			columnItems = [];
			

			galleryRect = gallery.getBoundingClientRect();
			galleryInitialYOffset = galleryRect.top + localPageYOffset;
			windowHeight =  window.innerHeight;

			gridWidth = galleryRect.right - galleryRect.left;

			i = numColumns = opts.cols(gridWidth);
			while(i--) {
				columnHeights.push(0);
				columnItems.push([]);
			}

			columnWidth = ( gridWidth - opts.gap * (numColumns-1) ) / numColumns;
			columnWidth = Math.round(columnWidth * 100) / 100; // leave two decimal points

			for(i = 0; i < thumbElements.length; i++) {
						
			    figureEl = thumbElements[i];

			    if(figureEl.nodeType !== 1) {
			        continue;
			    }

				// Find the key of the smallest column.
				var smallestColumnIndex = 0,
					tempVal = columnHeights[0];
				for(var q = 1; q < numColumns; q++) {
					if(columnHeights[q] < tempVal) {
						smallestColumnIndex = q;
						tempVal = columnHeights[q];
					}
				}
				
				var itemHeight = opts.getHeight(figureEl, columnWidth);
				var itemYPosition = columnHeights[smallestColumnIndex];
				var itemData;

				
				itemsToPaint[i] = {
					width: columnWidth + 'px',
					height: itemHeight + 'px',
					top: itemYPosition + 'px',
					left: columnWidth * smallestColumnIndex + (smallestColumnIndex * opts.gap) + 'px'
				};
				
				
				if(opts.src && figureEl.getAttribute(opts.src)) {
					itemData = {
						el:figureEl,
						h:itemHeight + opts.gap,
						tH: itemYPosition
					};
				}
			
				columnItems[smallestColumnIndex].push(itemData);

				columnHeights[smallestColumnIndex] += itemHeight + opts.gap;
			}
			
		};

		var paint = function() {
			for(i = 0; i < thumbElements.length; i++) {
				
				if(itemsToPaint[i]) {
				    var elStyle = thumbElements[i].style;
				   
				    elStyle.width = itemsToPaint[i].width;
				    elStyle.height = itemsToPaint[i].height;
				    elStyle.top = itemsToPaint[i].top;
				    elStyle.left = itemsToPaint[i].left;
				}
			}
			
			gallery.style.height = Math.max.apply(0, columnHeights) + 'px';
			//self.lazyLoad();
		};
		
		self.lazyLoad = function() {
			if(!opts.src) {
				return;
			}
			var pageOffset = localPageYOffset - galleryInitialYOffset,
				col,
				item;

			for(var c = 0; c < numColumns; c++) {
				col = columnItems[c];
				for(i = 0; i < col.length; i++) {
					item = col[i];
					if(!item) {
						continue;
					}
					var extraGap = 50;
					var tempGap = 0; // TEMP
					if(
						pageOffset+windowHeight+extraGap-tempGap >= item.tH && 
						pageOffset-extraGap+tempGap                    <= (item.tH + item.h) 
					) {
						opts.addImage(item.el);
						item.el.removeAttribute(opts.src);
						col[i] = null;
					}
				}
			}

		};

		// Throttle scroll (fire once per 100ms)
		var throttleTimer,
			onPageScroll = function() {
				if(!throttleTimer) {
					localPageYOffset = window.pageYOffset;
					self.lazyLoad();
					throttleTimer = setTimeout(function() { 
						localPageYOffset = window.pageYOffset;
						self.lazyLoad(); 
						throttleTimer = 0; 
					}, 100);
				}
			};

		/**
		 * Adds/removes scroll event, resize event, and their debouce/throttle timers.
		 * @param  {boolean} remove    Set to true to remove.
		 */
		self.toggleEvents = function(remove) {
			
			toggleEvent(window, 'scroll', onPageScroll, remove);

			toggleEvent(window, 'magnificCalc', calc, remove);
			toggleEvent(window, 'magnificPaint', paint, remove);

			//toggleEvent(window, 'resize', onPageResize, remove);
			if(remove) {
				clearTimeout(debounceTimer);
				clearTimeout(throttleTimer);
			}
		};

		//self.build();
		self.toggleEvents();
	};

})(window);


var init = function() {
	// loop through all gallery elements and bind events
	var galleryElements = document.querySelectorAll('.skill-icon');
	for(var i = 0, l = galleryElements.length; i < l; i++) {
		window.masonryTest = new MicroMasonryGrid(galleryElements[i], {
			cols:function(w) {
				return Math.round(w/210);
			}
		});
	}
};

init();