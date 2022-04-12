function New_Order()
{
  //Clicks the 4 item of the 'ToolBar' toolbar.
  Aliases.Orders.MainForm.ToolBar.ClickItem(4, false);
  //Selects the 'ScreenSaver' item of the 'ProductNames' combo box.
  Aliases.Orders.OrderForm.Group.ProductNames.ClickItem("ScreenSaver");
  //Clicks the 'Price' object.
  Aliases.Orders.OrderForm.Group.Price.Click(14, 9);
  //Enters the text '$1020' in the 'Price' text editor.
  Aliases.Orders.OrderForm.Group.Price.SetText("$1020");
  //Clicks the 'Discount' object.
  Aliases.Orders.OrderForm.Group.Discount.Click(12, 11);
  //Enters the text '7%' in the 'Discount' text editor.
  Aliases.Orders.OrderForm.Group.Discount.SetText("7%");
  //Sets the date '4/12/2022' in the 'Date' date/time picker.
  Aliases.Orders.OrderForm.Group.Date.wDate = "4/12/2022";
  //Clicks the 'Customer' object.
  Aliases.Orders.OrderForm.Group.Customer.Click(106, 7);
  //Enters the text 'levan' in the 'Customer' text editor.
  Aliases.Orders.OrderForm.Group.Customer.SetText("levan");
  //Clicks the 'Street' object.
  Aliases.Orders.OrderForm.Group.Street.Click(64, 8);
  //Clicks the 'Street' object.
  Aliases.Orders.OrderForm.Group.Street.Click(64, 8);
  //Enters the text 'istar' in the 'Street' text editor.
  Aliases.Orders.OrderForm.Group.Street.SetText("istar");
  //Clicks the 'City' object.
  Aliases.Orders.OrderForm.Group.City.Click(88, 6);
  //Enters the text 'tbilisi' in the 'City' text editor.
  Aliases.Orders.OrderForm.Group.City.SetText("tbilisi");
  //Double-clicks the 'State' object.
  Aliases.Orders.OrderForm.Group.State.DblClick(62, 13);
  //Enters the text 'georgia' in the 'State' text editor.
  Aliases.Orders.OrderForm.Group.State.SetText("georgia");
  //Clicks the 'Zip' object.
  Aliases.Orders.OrderForm.Group.Zip.Click(52, 15);
  //Enters the text '1002002' in the 'Zip' text editor.
  Aliases.Orders.OrderForm.Group.Zip.SetText("1002002");
  //Clicks the 'MasterCard' button.
  Aliases.Orders.OrderForm.Group.MasterCard.ClickButton();
  //Clicks the 'CardNo' object.
  Aliases.Orders.OrderForm.Group.CardNo.Click(55, 11);
  //Enters the text '98142718259817581725915718725981' in the 'CardNo' text editor.
  Aliases.Orders.OrderForm.Group.CardNo.SetText("98142718259817581725915718725981");
  //Sets the date '4/12/2022' in the 'ExpDate' date/time picker.
  Aliases.Orders.OrderForm.Group.ExpDate.wDate = "4/12/2022";
  //Clicks the 'ButtonOK' button.
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
  //Activates the 'MainForm' window.
  Aliases.Orders.MainForm.Activate();
  //Checks whether the 'AccessibleRole' property of the Aliases.Orders.MainForm.OrdersView object equals 'Default'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "AccessibleRole", cmpEqual, "Default");
  //Checks whether the 'Activation' property of the Aliases.Orders.MainForm.OrdersView object equals 'Standard'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Activation", cmpEqual, "Standard");
  //Checks whether the 'Alignment' property of the Aliases.Orders.MainForm.OrdersView object equals 'Top'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Alignment", cmpEqual, "Top");
  //Checks whether the 'AllowColumnReorder' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "AllowColumnReorder", cmpEqual, false);
  //Checks whether the 'AllowDrop' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "AllowDrop", cmpEqual, false);
  //Checks whether the 'Anchor' property of the Aliases.Orders.MainForm.OrdersView object equals 'Top, Left'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Anchor", cmpEqual, "Top, Left");
  //Checks whether the 'AutoArrange' property of the Aliases.Orders.MainForm.OrdersView object equals True.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "AutoArrange", cmpEqual, true);
  //Checks whether the 'AutoSize' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "AutoSize", cmpEqual, false);
  //Checks whether the 'BKIMGARRAYSIZE' property of the Aliases.Orders.MainForm.OrdersView object equals 8.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "BKIMGARRAYSIZE", cmpEqual, 8);
  //Checks whether the 'BackgroundImageLayout' property of the Aliases.Orders.MainForm.OrdersView object equals 'Tile'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "BackgroundImageLayout", cmpEqual, "Tile");
  //Checks whether the 'BackgroundImageTiled' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "BackgroundImageTiled", cmpEqual, false);
  //Checks whether the 'BorderStyle' property of the Aliases.Orders.MainForm.OrdersView object equals 'Fixed3D'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "BorderStyle", cmpEqual, "Fixed3D");
  //Checks whether the 'Bottom' property of the Aliases.Orders.MainForm.OrdersView object equals 799.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Bottom", cmpEqual, 799);
  //Checks whether the 'CanFocus' property of the Aliases.Orders.MainForm.OrdersView object equals True.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "CanFocus", cmpEqual, true);
  //Checks whether the 'CanSelect' property of the Aliases.Orders.MainForm.OrdersView object equals True.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "CanSelect", cmpEqual, true);
  //Checks whether the 'Capture' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Capture", cmpEqual, false);
  //Checks whether the 'CausesValidation' property of the Aliases.Orders.MainForm.OrdersView object equals True.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "CausesValidation", cmpEqual, true);
  //Checks whether the 'CheckBoxes' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "CheckBoxes", cmpEqual, false);
  //Checks whether the 'CheckForIllegalCrossThreadCalls' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "CheckForIllegalCrossThreadCalls", cmpEqual, false);
  //Checks whether the 'ChildCount' property of the Aliases.Orders.MainForm.OrdersView object equals 1.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "ChildCount", cmpEqual, 1);
  //Checks whether the 'ClrClassName' property of the Aliases.Orders.MainForm.OrdersView object equals 'ListView'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "ClrClassName", cmpEqual, "ListView");
  //Checks whether the 'ClrFullClassName' property of the Aliases.Orders.MainForm.OrdersView object equals 'System.Windows.Forms.ListView'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "ClrFullClassName", cmpEqual, "System.Windows.Forms.ListView");
  //Checks whether the 'CompanyName' property of the Aliases.Orders.MainForm.OrdersView object equals 'Microsoft Corporation'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "CompanyName", cmpEqual, "Microsoft Corporation");
  //Checks whether the 'ContainsFocus' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "ContainsFocus", cmpEqual, false);
  //Checks whether the 'ControlId' property of the Aliases.Orders.MainForm.OrdersView object equals 68822.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "ControlId", cmpEqual, 68822);
  //Checks whether the 'Created' property of the Aliases.Orders.MainForm.OrdersView object equals True.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Created", cmpEqual, true);
  //Checks whether the 'DeviceDpi' property of the Aliases.Orders.MainForm.OrdersView object equals 96.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "DeviceDpi", cmpEqual, 96);
  //Checks whether the 'Disposing' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Disposing", cmpEqual, false);
  //Checks whether the 'Dock' property of the Aliases.Orders.MainForm.OrdersView object equals 'Fill'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Dock", cmpEqual, "Fill");
  //Checks whether the 'Enabled' property of the Aliases.Orders.MainForm.OrdersView object equals True.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Enabled", cmpEqual, true);
  //Checks whether the 'Exists' property of the Aliases.Orders.MainForm.OrdersView object equals True.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Exists", cmpEqual, true);
  //Checks whether the 'Focused' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Focused", cmpEqual, false);
  //Checks whether the 'FullName' property of the Aliases.Orders.MainForm.OrdersView object equals 'Sys.Process("Orders").WinFormsObject("MainForm").WinFormsObject("OrdersView")'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "FullName", cmpEqual, "Sys.Process(\"Orders\").WinFormsObject(\"MainForm\").WinFormsObject(\"OrdersView\")");
  //Checks whether the 'FullRowSelect' property of the Aliases.Orders.MainForm.OrdersView object equals True.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "FullRowSelect", cmpEqual, true);
  //Checks whether the 'GridLines' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "GridLines", cmpEqual, false);
  //Checks whether the 'Handle' property of the Aliases.Orders.MainForm.OrdersView object equals 68822.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Handle", cmpEqual, 68822);
  //Checks whether the 'HasChildren' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "HasChildren", cmpEqual, false);
  //Checks whether the 'HeaderStyle' property of the Aliases.Orders.MainForm.OrdersView object equals 'Nonclickable'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "HeaderStyle", cmpEqual, "Nonclickable");
  //Checks whether the 'Height' property of the Aliases.Orders.MainForm.OrdersView object equals 771.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Height", cmpEqual, 771);
  //Checks whether the 'HideSelection' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "HideSelection", cmpEqual, false);
  //Checks whether the 'HighOrderBitMask' property of the Aliases.Orders.MainForm.OrdersView object equals 128.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "HighOrderBitMask", cmpEqual, 128);
  //Checks whether the 'HotTracking' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "HotTracking", cmpEqual, false);
  //Checks whether the 'HoverSelection' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "HoverSelection", cmpEqual, false);
  //Checks whether the 'Id' property of the Aliases.Orders.MainForm.OrdersView object equals 68822.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Id", cmpEqual, 68822);
  //Checks whether the 'ImeCharsToIgnoreDisabled' property of the Aliases.Orders.MainForm.OrdersView object equals -1.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "ImeCharsToIgnoreDisabled", cmpEqual, -1);
  //Checks whether the 'ImeCharsToIgnoreEnabled' property of the Aliases.Orders.MainForm.OrdersView object equals 0.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "ImeCharsToIgnoreEnabled", cmpEqual, 0);
  //Checks whether the 'ImeMode' property of the Aliases.Orders.MainForm.OrdersView object equals 'NoControl'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "ImeMode", cmpEqual, "NoControl");
  //Checks whether the 'Index' property of the Aliases.Orders.MainForm.OrdersView object equals 1.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Index", cmpEqual, 1);
  //Checks whether the 'InvokeRequired' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "InvokeRequired", cmpEqual, false);
  //Checks whether the 'IsAccessible' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "IsAccessible", cmpEqual, false);
  //Checks whether the 'IsDisposed' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "IsDisposed", cmpEqual, false);
  //Checks whether the 'IsHandleCreated' property of the Aliases.Orders.MainForm.OrdersView object equals True.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "IsHandleCreated", cmpEqual, true);
  //Checks whether the 'IsMirrored' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "IsMirrored", cmpEqual, false);
  //Checks whether the 'LISTVIEWSTATE1_cancelledColumnWidthChanging' property of the Aliases.Orders.MainForm.OrdersView object equals 2.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE1_cancelledColumnWidthChanging", cmpEqual, 2);
  //Checks whether the 'LISTVIEWSTATE1_disposingImageLists' property of the Aliases.Orders.MainForm.OrdersView object equals 4.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE1_disposingImageLists", cmpEqual, 4);
  //Checks whether the 'LISTVIEWSTATE1_insertingItemsNatively' property of the Aliases.Orders.MainForm.OrdersView object equals 1.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE1_insertingItemsNatively", cmpEqual, 1);
  //Checks whether the 'LISTVIEWSTATE1_selectedIndexChangedSkipped' property of the Aliases.Orders.MainForm.OrdersView object equals 16.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE1_selectedIndexChangedSkipped", cmpEqual, 16);
  //Checks whether the 'LISTVIEWSTATE1_useCompatibleStateImageBehavior' property of the Aliases.Orders.MainForm.OrdersView object equals 8.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE1_useCompatibleStateImageBehavior", cmpEqual, 8);
  //Checks whether the 'LISTVIEWSTATE_allowColumnReorder' property of the Aliases.Orders.MainForm.OrdersView object equals 2.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_allowColumnReorder", cmpEqual, 2);
  //Checks whether the 'LISTVIEWSTATE_autoArrange' property of the Aliases.Orders.MainForm.OrdersView object equals 4.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_autoArrange", cmpEqual, 4);
  //Checks whether the 'LISTVIEWSTATE_backgroundImageTiled' property of the Aliases.Orders.MainForm.OrdersView object equals 65536.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_backgroundImageTiled", cmpEqual, 65536);
  //Checks whether the 'LISTVIEWSTATE_checkBoxes' property of the Aliases.Orders.MainForm.OrdersView object equals 8.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_checkBoxes", cmpEqual, 8);
  //Checks whether the 'LISTVIEWSTATE_columnClicked' property of the Aliases.Orders.MainForm.OrdersView object equals 131072.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_columnClicked", cmpEqual, 131072);
  //Checks whether the 'LISTVIEWSTATE_columnResizeCancelled' property of the Aliases.Orders.MainForm.OrdersView object equals 1073741824.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_columnResizeCancelled", cmpEqual, 1073741824);
  //Checks whether the 'LISTVIEWSTATE_comctlSupportsVisualStyles' property of the Aliases.Orders.MainForm.OrdersView object equals 2097152.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_comctlSupportsVisualStyles", cmpEqual, 2097152);
  //Checks whether the 'LISTVIEWSTATE_comctlSupportsVisualStylesTested' property of the Aliases.Orders.MainForm.OrdersView object equals 4194304.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_comctlSupportsVisualStylesTested", cmpEqual, 4194304);
  //Checks whether the 'LISTVIEWSTATE_doubleclickFired' property of the Aliases.Orders.MainForm.OrdersView object equals 262144.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_doubleclickFired", cmpEqual, 262144);
  //Checks whether the 'LISTVIEWSTATE_expectingMouseUp' property of the Aliases.Orders.MainForm.OrdersView object equals 1048576.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_expectingMouseUp", cmpEqual, 1048576);
  //Checks whether the 'LISTVIEWSTATE_flipViewToLargeIconAndSmallIcon' property of the Aliases.Orders.MainForm.OrdersView object equals 268435456.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_flipViewToLargeIconAndSmallIcon", cmpEqual, 268435456);
  //Checks whether the 'LISTVIEWSTATE_fullRowSelect' property of the Aliases.Orders.MainForm.OrdersView object equals 16.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_fullRowSelect", cmpEqual, 16);
  //Checks whether the 'LISTVIEWSTATE_gridLines' property of the Aliases.Orders.MainForm.OrdersView object equals 32.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_gridLines", cmpEqual, 32);
  //Checks whether the 'LISTVIEWSTATE_handleDestroyed' property of the Aliases.Orders.MainForm.OrdersView object equals 16777216.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_handleDestroyed", cmpEqual, 16777216);
  //Checks whether the 'LISTVIEWSTATE_headerControlTracking' property of the Aliases.Orders.MainForm.OrdersView object equals 67108864.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_headerControlTracking", cmpEqual, 67108864);
  //Checks whether the 'LISTVIEWSTATE_headerDividerDblClick' property of the Aliases.Orders.MainForm.OrdersView object equals 536870912.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_headerDividerDblClick", cmpEqual, 536870912);
  //Checks whether the 'LISTVIEWSTATE_hideSelection' property of the Aliases.Orders.MainForm.OrdersView object equals 64.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_hideSelection", cmpEqual, 64);
  //Checks whether the 'LISTVIEWSTATE_hotTracking' property of the Aliases.Orders.MainForm.OrdersView object equals 128.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_hotTracking", cmpEqual, 128);
  //Checks whether the 'LISTVIEWSTATE_hoverSelection' property of the Aliases.Orders.MainForm.OrdersView object equals 4096.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_hoverSelection", cmpEqual, 4096);
  //Checks whether the 'LISTVIEWSTATE_inLabelEdit' property of the Aliases.Orders.MainForm.OrdersView object equals 16384.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_inLabelEdit", cmpEqual, 16384);
  //Checks whether the 'LISTVIEWSTATE_itemCollectionChangedInMouseDown' property of the Aliases.Orders.MainForm.OrdersView object equals 134217728.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_itemCollectionChangedInMouseDown", cmpEqual, 134217728);
  //Checks whether the 'LISTVIEWSTATE_labelEdit' property of the Aliases.Orders.MainForm.OrdersView object equals 256.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_labelEdit", cmpEqual, 256);
  //Checks whether the 'LISTVIEWSTATE_labelWrap' property of the Aliases.Orders.MainForm.OrdersView object equals 512.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_labelWrap", cmpEqual, 512);
  //Checks whether the 'LISTVIEWSTATE_mouseUpFired' property of the Aliases.Orders.MainForm.OrdersView object equals 524288.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_mouseUpFired", cmpEqual, 524288);
  //Checks whether the 'LISTVIEWSTATE_multiSelect' property of the Aliases.Orders.MainForm.OrdersView object equals 1024.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_multiSelect", cmpEqual, 1024);
  //Checks whether the 'LISTVIEWSTATE_nonclickHdr' property of the Aliases.Orders.MainForm.OrdersView object equals 8192.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_nonclickHdr", cmpEqual, 8192);
  //Checks whether the 'LISTVIEWSTATE_ownerDraw' property of the Aliases.Orders.MainForm.OrdersView object equals 1.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_ownerDraw", cmpEqual, 1);
  //Checks whether the 'LISTVIEWSTATE_scrollable' property of the Aliases.Orders.MainForm.OrdersView object equals 2048.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_scrollable", cmpEqual, 2048);
  //Checks whether the 'LISTVIEWSTATE_showGroups' property of the Aliases.Orders.MainForm.OrdersView object equals 8388608.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_showGroups", cmpEqual, 8388608);
  //Checks whether the 'LISTVIEWSTATE_showItemToolTips' property of the Aliases.Orders.MainForm.OrdersView object equals 32768.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_showItemToolTips", cmpEqual, 32768);
  //Checks whether the 'LISTVIEWSTATE_virtualMode' property of the Aliases.Orders.MainForm.OrdersView object equals 33554432.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LISTVIEWSTATE_virtualMode", cmpEqual, 33554432);
  //Checks whether the 'LVTOOLTIPTRACKING' property of the Aliases.Orders.MainForm.OrdersView object equals 48.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LVTOOLTIPTRACKING", cmpEqual, 48);
  //Checks whether the 'LabelEdit' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LabelEdit", cmpEqual, false);
  //Checks whether the 'LabelWrap' property of the Aliases.Orders.MainForm.OrdersView object equals True.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "LabelWrap", cmpEqual, true);
  //Checks whether the 'Left' property of the Aliases.Orders.MainForm.OrdersView object equals 10.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Left", cmpEqual, 10);
  //Checks whether the 'MASK_HITTESTFLAG' property of the Aliases.Orders.MainForm.OrdersView object equals 247.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "MASK_HITTESTFLAG", cmpEqual, 247);
  //Checks whether the 'MAXTILECOLUMNS' property of the Aliases.Orders.MainForm.OrdersView object equals 20.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "MAXTILECOLUMNS", cmpEqual, 20);
  //Checks whether the 'ModifierKeys' property of the Aliases.Orders.MainForm.OrdersView object equals 'None'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "ModifierKeys", cmpEqual, "None");
  //Checks whether the 'MouseButtons' property of the Aliases.Orders.MainForm.OrdersView object equals 'None'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "MouseButtons", cmpEqual, "None");
  //Checks whether the 'MultiSelect' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "MultiSelect", cmpEqual, false);
  //Checks whether the 'Name' property of the Aliases.Orders.MainForm.OrdersView object equals 'WinFormsObject("OrdersView")'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Name", cmpEqual, "WinFormsObject(\"OrdersView\")");
  //Checks whether the 'OwnerDraw' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "OwnerDraw", cmpEqual, false);
  //Checks whether the 'PaintLayerBackground' property of the Aliases.Orders.MainForm.OrdersView object equals 1.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PaintLayerBackground", cmpEqual, 1);
  //Checks whether the 'PaintLayerForeground' property of the Aliases.Orders.MainForm.OrdersView object equals 2.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PaintLayerForeground", cmpEqual, 2);
  //Checks whether the 'ProductName' property of the Aliases.Orders.MainForm.OrdersView object equals 'Microsoft® .NET Framework'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "ProductName", cmpEqual, "Microsoft® .NET Framework");
  //Checks whether the 'ProductVersion' property of the Aliases.Orders.MainForm.OrdersView object equals '4.8.4400.0'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "ProductVersion", cmpEqual, "4.8.4400.0");
  //Checks whether the 'PropAccessibility' property of the Aliases.Orders.MainForm.OrdersView object equals 19.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropAccessibility", cmpEqual, 19);
  //Checks whether the 'PropAccessibleDefaultActionDescription' property of the Aliases.Orders.MainForm.OrdersView object equals 17.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropAccessibleDefaultActionDescription", cmpEqual, 17);
  //Checks whether the 'PropAccessibleDescription' property of the Aliases.Orders.MainForm.OrdersView object equals 18.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropAccessibleDescription", cmpEqual, 18);
  //Checks whether the 'PropAccessibleHelpProvider' property of the Aliases.Orders.MainForm.OrdersView object equals 27.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropAccessibleHelpProvider", cmpEqual, 27);
  //Checks whether the 'PropAccessibleName' property of the Aliases.Orders.MainForm.OrdersView object equals 21.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropAccessibleName", cmpEqual, 21);
  //Checks whether the 'PropAccessibleRole' property of the Aliases.Orders.MainForm.OrdersView object equals 22.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropAccessibleRole", cmpEqual, 22);
  //Checks whether the 'PropActiveXImpl' property of the Aliases.Orders.MainForm.OrdersView object equals 24.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropActiveXImpl", cmpEqual, 24);
  //Checks whether the 'PropAmbientPropertiesService' property of the Aliases.Orders.MainForm.OrdersView object equals 37.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropAmbientPropertiesService", cmpEqual, 37);
  //Checks whether the 'PropAutoScrollOffset' property of the Aliases.Orders.MainForm.OrdersView object equals 29.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropAutoScrollOffset", cmpEqual, 29);
  //Checks whether the 'PropBackBrush' property of the Aliases.Orders.MainForm.OrdersView object equals 1.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropBackBrush", cmpEqual, 1);
  //Checks whether the 'PropBackColor' property of the Aliases.Orders.MainForm.OrdersView object equals 5.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropBackColor", cmpEqual, 5);
  //Checks whether the 'PropBackgroundImage' property of the Aliases.Orders.MainForm.OrdersView object equals 8.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropBackgroundImage", cmpEqual, 8);
  //Checks whether the 'PropBackgroundImageLayout' property of the Aliases.Orders.MainForm.OrdersView object equals 26.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropBackgroundImageLayout", cmpEqual, 26);
  //Checks whether the 'PropBindingManager' property of the Aliases.Orders.MainForm.OrdersView object equals 16.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropBindingManager", cmpEqual, 16);
  //Checks whether the 'PropBindings' property of the Aliases.Orders.MainForm.OrdersView object equals 15.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropBindings", cmpEqual, 15);
  //Checks whether the 'PropCacheTextCount' property of the Aliases.Orders.MainForm.OrdersView object equals 35.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropCacheTextCount", cmpEqual, 35);
  //Checks whether the 'PropCacheTextField' property of the Aliases.Orders.MainForm.OrdersView object equals 36.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropCacheTextField", cmpEqual, 36);
  //Checks whether the 'PropContextMenu' property of the Aliases.Orders.MainForm.OrdersView object equals 11.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropContextMenu", cmpEqual, 11);
  //Checks whether the 'PropContextMenuStrip' property of the Aliases.Orders.MainForm.OrdersView object equals 28.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropContextMenuStrip", cmpEqual, 28);
  //Checks whether the 'PropControlVersionInfo' property of the Aliases.Orders.MainForm.OrdersView object equals 25.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropControlVersionInfo", cmpEqual, 25);
  //Checks whether the 'PropControlsCollection' property of the Aliases.Orders.MainForm.OrdersView object equals 4.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropControlsCollection", cmpEqual, 4);
  //Checks whether the 'PropCurrentAmbientFont' property of the Aliases.Orders.MainForm.OrdersView object equals 3.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropCurrentAmbientFont", cmpEqual, 3);
  //Checks whether the 'PropCursor' property of the Aliases.Orders.MainForm.OrdersView object equals 12.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropCursor", cmpEqual, 12);
  //Checks whether the 'PropDelayedUpdateItems' property of the Aliases.Orders.MainForm.OrdersView object equals 75.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropDelayedUpdateItems", cmpEqual, 75);
  //Checks whether the 'PropDisableImeModeChangedCount' property of the Aliases.Orders.MainForm.OrdersView object equals 33.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropDisableImeModeChangedCount", cmpEqual, 33);
  //Checks whether the 'PropFont' property of the Aliases.Orders.MainForm.OrdersView object equals 7.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropFont", cmpEqual, 7);
  //Checks whether the 'PropFontHandleWrapper' property of the Aliases.Orders.MainForm.OrdersView object equals 9.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropFontHandleWrapper", cmpEqual, 9);
  //Checks whether the 'PropFontHeight' property of the Aliases.Orders.MainForm.OrdersView object equals 2.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropFontHeight", cmpEqual, 2);
  //Checks whether the 'PropForeColor' property of the Aliases.Orders.MainForm.OrdersView object equals 6.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropForeColor", cmpEqual, 6);
  //Checks whether the 'PropImeMode' property of the Aliases.Orders.MainForm.OrdersView object equals 32.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropImeMode", cmpEqual, 32);
  //Checks whether the 'PropImeWmCharsToIgnore' property of the Aliases.Orders.MainForm.OrdersView object equals 31.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropImeWmCharsToIgnore", cmpEqual, 31);
  //Checks whether the 'PropLastCanEnableIme' property of the Aliases.Orders.MainForm.OrdersView object equals 34.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropLastCanEnableIme", cmpEqual, 34);
  //Checks whether the 'PropName' property of the Aliases.Orders.MainForm.OrdersView object equals 0.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropName", cmpEqual, 0);
  //Checks whether the 'PropNcAccessibility' property of the Aliases.Orders.MainForm.OrdersView object equals 20.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropNcAccessibility", cmpEqual, 20);
  //Checks whether the 'PropPaintingException' property of the Aliases.Orders.MainForm.OrdersView object equals 23.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropPaintingException", cmpEqual, 23);
  //Checks whether the 'PropRegion' property of the Aliases.Orders.MainForm.OrdersView object equals 13.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropRegion", cmpEqual, 13);
  //Checks whether the 'PropRightToLeft' property of the Aliases.Orders.MainForm.OrdersView object equals 14.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropRightToLeft", cmpEqual, 14);
  //Checks whether the 'PropUseCompatibleTextRendering' property of the Aliases.Orders.MainForm.OrdersView object equals 30.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropUseCompatibleTextRendering", cmpEqual, 30);
  //Checks whether the 'PropUserData' property of the Aliases.Orders.MainForm.OrdersView object equals 10.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "PropUserData", cmpEqual, 10);
  //Checks whether the 'RecreatingHandle' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "RecreatingHandle", cmpEqual, false);
  //Checks whether the 'RequiredScalingEnabledMask' property of the Aliases.Orders.MainForm.OrdersView object equals 16.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "RequiredScalingEnabledMask", cmpEqual, 16);
  //Checks whether the 'RequiredScalingMask' property of the Aliases.Orders.MainForm.OrdersView object equals 15.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "RequiredScalingMask", cmpEqual, 15);
  //Checks whether the 'Right' property of the Aliases.Orders.MainForm.OrdersView object equals 1536.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Right", cmpEqual, 1536);
  //Checks whether the 'RightToLeft' property of the Aliases.Orders.MainForm.OrdersView object equals 'No'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "RightToLeft", cmpEqual, "No");
  //Checks whether the 'RightToLeftLayout' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "RightToLeftLayout", cmpEqual, false);
  //Checks whether the 'STATE2_BECOMINGACTIVECONTROL' property of the Aliases.Orders.MainForm.OrdersView object equals 32.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE2_BECOMINGACTIVECONTROL", cmpEqual, 32);
  //Checks whether the 'STATE2_CLEARLAYOUTARGS' property of the Aliases.Orders.MainForm.OrdersView object equals 64.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE2_CLEARLAYOUTARGS", cmpEqual, 64);
  //Checks whether the 'STATE2_CURRENTLYBEINGSCALED' property of the Aliases.Orders.MainForm.OrdersView object equals 8192.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE2_CURRENTLYBEINGSCALED", cmpEqual, 8192);
  //Checks whether the 'STATE2_HAVEINVOKED' property of the Aliases.Orders.MainForm.OrdersView object equals 1.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE2_HAVEINVOKED", cmpEqual, 1);
  //Checks whether the 'STATE2_INPUTCHAR' property of the Aliases.Orders.MainForm.OrdersView object equals 256.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE2_INPUTCHAR", cmpEqual, 256);
  //Checks whether the 'STATE2_INPUTKEY' property of the Aliases.Orders.MainForm.OrdersView object equals 128.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE2_INPUTKEY", cmpEqual, 128);
  //Checks whether the 'STATE2_INTERESTEDINUSERPREFERENCECHANGED' property of the Aliases.Orders.MainForm.OrdersView object equals 8.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE2_INTERESTEDINUSERPREFERENCECHANGED", cmpEqual, 8);
  //Checks whether the 'STATE2_ISACTIVEX' property of the Aliases.Orders.MainForm.OrdersView object equals 1024.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE2_ISACTIVEX", cmpEqual, 1024);
  //Checks whether the 'STATE2_LISTENINGTOUSERPREFERENCECHANGED' property of the Aliases.Orders.MainForm.OrdersView object equals 4.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE2_LISTENINGTOUSERPREFERENCECHANGED", cmpEqual, 4);
  //Checks whether the 'STATE2_MAINTAINSOWNCAPTUREMODE' property of the Aliases.Orders.MainForm.OrdersView object equals 16.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE2_MAINTAINSOWNCAPTUREMODE", cmpEqual, 16);
  //Checks whether the 'STATE2_SETSCROLLPOS' property of the Aliases.Orders.MainForm.OrdersView object equals 2.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE2_SETSCROLLPOS", cmpEqual, 2);
  //Checks whether the 'STATE2_TOPMDIWINDOWCLOSING' property of the Aliases.Orders.MainForm.OrdersView object equals 4096.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE2_TOPMDIWINDOWCLOSING", cmpEqual, 4096);
  //Checks whether the 'STATE2_UICUES' property of the Aliases.Orders.MainForm.OrdersView object equals 512.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE2_UICUES", cmpEqual, 512);
  //Checks whether the 'STATE2_USEPREFERREDSIZECACHE' property of the Aliases.Orders.MainForm.OrdersView object equals 2048.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE2_USEPREFERREDSIZECACHE", cmpEqual, 2048);
  //Checks whether the 'STATE_ALLOWDROP' property of the Aliases.Orders.MainForm.OrdersView object equals 64.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_ALLOWDROP", cmpEqual, 64);
  //Checks whether the 'STATE_CAUSESVALIDATION' property of the Aliases.Orders.MainForm.OrdersView object equals 131072.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_CAUSESVALIDATION", cmpEqual, 131072);
  //Checks whether the 'STATE_CHECKEDHOST' property of the Aliases.Orders.MainForm.OrdersView object equals 16777216.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_CHECKEDHOST", cmpEqual, 16777216);
  //Checks whether the 'STATE_CREATED' property of the Aliases.Orders.MainForm.OrdersView object equals 1.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_CREATED", cmpEqual, 1);
  //Checks whether the 'STATE_CREATINGHANDLE' property of the Aliases.Orders.MainForm.OrdersView object equals 262144.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_CREATINGHANDLE", cmpEqual, 262144);
  //Checks whether the 'STATE_DISPOSED' property of the Aliases.Orders.MainForm.OrdersView object equals 2048.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_DISPOSED", cmpEqual, 2048);
  //Checks whether the 'STATE_DISPOSING' property of the Aliases.Orders.MainForm.OrdersView object equals 4096.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_DISPOSING", cmpEqual, 4096);
  //Checks whether the 'STATE_DOUBLECLICKFIRED' property of the Aliases.Orders.MainForm.OrdersView object equals 67108864.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_DOUBLECLICKFIRED", cmpEqual, 67108864);
  //Checks whether the 'STATE_DROPTARGET' property of the Aliases.Orders.MainForm.OrdersView object equals 128.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_DROPTARGET", cmpEqual, 128);
  //Checks whether the 'STATE_ENABLED' property of the Aliases.Orders.MainForm.OrdersView object equals 4.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_ENABLED", cmpEqual, 4);
  //Checks whether the 'STATE_EXCEPTIONWHILEPAINTING' property of the Aliases.Orders.MainForm.OrdersView object equals 4194304.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_EXCEPTIONWHILEPAINTING", cmpEqual, 4194304);
  //Checks whether the 'STATE_HOSTEDINDIALOG' property of the Aliases.Orders.MainForm.OrdersView object equals 33554432.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_HOSTEDINDIALOG", cmpEqual, 33554432);
  //Checks whether the 'STATE_ISACCESSIBLE' property of the Aliases.Orders.MainForm.OrdersView object equals 1048576.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_ISACCESSIBLE", cmpEqual, 1048576);
  //Checks whether the 'STATE_LAYOUTDEFERRED' property of the Aliases.Orders.MainForm.OrdersView object equals 512.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_LAYOUTDEFERRED", cmpEqual, 512);
  //Checks whether the 'STATE_LAYOUTISDIRTY' property of the Aliases.Orders.MainForm.OrdersView object equals 8388608.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_LAYOUTISDIRTY", cmpEqual, 8388608);
  //Checks whether the 'STATE_MIRRORED' property of the Aliases.Orders.MainForm.OrdersView object equals 1073741824.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_MIRRORED", cmpEqual, 1073741824);
  //Checks whether the 'STATE_MODAL' property of the Aliases.Orders.MainForm.OrdersView object equals 32.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_MODAL", cmpEqual, 32);
  //Checks whether the 'STATE_MOUSEENTERPENDING' property of the Aliases.Orders.MainForm.OrdersView object equals 8192.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_MOUSEENTERPENDING", cmpEqual, 8192);
  //Checks whether the 'STATE_MOUSEPRESSED' property of the Aliases.Orders.MainForm.OrdersView object equals 134217728.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_MOUSEPRESSED", cmpEqual, 134217728);
  //Checks whether the 'STATE_NOZORDER' property of the Aliases.Orders.MainForm.OrdersView object equals 256.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_NOZORDER", cmpEqual, 256);
  //Checks whether the 'STATE_OWNCTLBRUSH' property of the Aliases.Orders.MainForm.OrdersView object equals 2097152.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_OWNCTLBRUSH", cmpEqual, 2097152);
  //Checks whether the 'STATE_PARENTRECREATING' property of the Aliases.Orders.MainForm.OrdersView object equals 536870912.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_PARENTRECREATING", cmpEqual, 536870912);
  //Checks whether the 'STATE_RECREATE' property of the Aliases.Orders.MainForm.OrdersView object equals 16.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_RECREATE", cmpEqual, 16);
  //Checks whether the 'STATE_SIZELOCKEDBYOS' property of the Aliases.Orders.MainForm.OrdersView object equals 65536.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_SIZELOCKEDBYOS", cmpEqual, 65536);
  //Checks whether the 'STATE_TABSTOP' property of the Aliases.Orders.MainForm.OrdersView object equals 8.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_TABSTOP", cmpEqual, 8);
  //Checks whether the 'STATE_THREADMARSHALLPENDING' property of the Aliases.Orders.MainForm.OrdersView object equals 32768.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_THREADMARSHALLPENDING", cmpEqual, 32768);
  //Checks whether the 'STATE_TOPLEVEL' property of the Aliases.Orders.MainForm.OrdersView object equals 524288.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_TOPLEVEL", cmpEqual, 524288);
  //Checks whether the 'STATE_TRACKINGMOUSEEVENT' property of the Aliases.Orders.MainForm.OrdersView object equals 16384.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_TRACKINGMOUSEEVENT", cmpEqual, 16384);
  //Checks whether the 'STATE_USEWAITCURSOR' property of the Aliases.Orders.MainForm.OrdersView object equals 1024.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_USEWAITCURSOR", cmpEqual, 1024);
  //Checks whether the 'STATE_VALIDATIONCANCELLED' property of the Aliases.Orders.MainForm.OrdersView object equals 268435456.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_VALIDATIONCANCELLED", cmpEqual, 268435456);
  //Checks whether the 'STATE_VISIBLE' property of the Aliases.Orders.MainForm.OrdersView object equals 2.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "STATE_VISIBLE", cmpEqual, 2);
  //Checks whether the 'ScreenLeft' property of the Aliases.Orders.MainForm.OrdersView object equals 0.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "ScreenLeft", cmpEqual, 0);
  //Checks whether the 'ScreenTop' property of the Aliases.Orders.MainForm.OrdersView object equals 89.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "ScreenTop", cmpEqual, 89);
  //Checks whether the 'Scrollable' property of the Aliases.Orders.MainForm.OrdersView object equals True.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Scrollable", cmpEqual, true);
  //Checks whether the 'ShowGroups' property of the Aliases.Orders.MainForm.OrdersView object equals True.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "ShowGroups", cmpEqual, true);
  //Checks whether the 'ShowItemToolTips' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "ShowItemToolTips", cmpEqual, false);
  //Checks whether the 'Sorting' property of the Aliases.Orders.MainForm.OrdersView object equals 'None'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Sorting", cmpEqual, "None");
  //Checks whether the 'TabIndex' property of the Aliases.Orders.MainForm.OrdersView object equals 2.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "TabIndex", cmpEqual, 2);
  //Checks whether the 'TabStop' property of the Aliases.Orders.MainForm.OrdersView object equals True.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "TabStop", cmpEqual, true);
  //Checks whether the 'Text' property of the Aliases.Orders.MainForm.OrdersView object equals ''.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Text", cmpEqual, "");
  //Checks whether the 'Top' property of the Aliases.Orders.MainForm.OrdersView object equals 99.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Top", cmpEqual, 99);
  //Checks whether the 'UISTATE_FOCUS_CUES_HIDDEN' property of the Aliases.Orders.MainForm.OrdersView object equals 1.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "UISTATE_FOCUS_CUES_HIDDEN", cmpEqual, 1);
  //Checks whether the 'UISTATE_FOCUS_CUES_MASK' property of the Aliases.Orders.MainForm.OrdersView object equals 15.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "UISTATE_FOCUS_CUES_MASK", cmpEqual, 15);
  //Checks whether the 'UISTATE_FOCUS_CUES_SHOW' property of the Aliases.Orders.MainForm.OrdersView object equals 2.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "UISTATE_FOCUS_CUES_SHOW", cmpEqual, 2);
  //Checks whether the 'UISTATE_KEYBOARD_CUES_HIDDEN' property of the Aliases.Orders.MainForm.OrdersView object equals 16.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "UISTATE_KEYBOARD_CUES_HIDDEN", cmpEqual, 16);
  //Checks whether the 'UISTATE_KEYBOARD_CUES_MASK' property of the Aliases.Orders.MainForm.OrdersView object equals 240.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "UISTATE_KEYBOARD_CUES_MASK", cmpEqual, 240);
  //Checks whether the 'UISTATE_KEYBOARD_CUES_SHOW' property of the Aliases.Orders.MainForm.OrdersView object equals 32.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "UISTATE_KEYBOARD_CUES_SHOW", cmpEqual, 32);
  //Checks whether the 'Unicode' property of the Aliases.Orders.MainForm.OrdersView object equals True.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Unicode", cmpEqual, true);
  //Checks whether the 'UseCompatibleStateImageBehavior' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "UseCompatibleStateImageBehavior", cmpEqual, false);
  //Checks whether the 'UseCompatibleTextRenderingDefault' property of the Aliases.Orders.MainForm.OrdersView object equals True.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "UseCompatibleTextRenderingDefault", cmpEqual, true);
  //Checks whether the 'UseWaitCursor' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "UseWaitCursor", cmpEqual, false);
  //Checks whether the 'View' property of the Aliases.Orders.MainForm.OrdersView object equals 'Details'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "View", cmpEqual, "Details");
  //Checks whether the 'VirtualListSize' property of the Aliases.Orders.MainForm.OrdersView object equals 0.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "VirtualListSize", cmpEqual, 0);
  //Checks whether the 'VirtualMode' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "VirtualMode", cmpEqual, false);
  //Checks whether the 'Visible' property of the Aliases.Orders.MainForm.OrdersView object equals True.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Visible", cmpEqual, true);
  //Checks whether the 'VisibleOnScreen' property of the Aliases.Orders.MainForm.OrdersView object equals True.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "VisibleOnScreen", cmpEqual, true);
  //Checks whether the 'WM_GETCONTROLNAME' property of the Aliases.Orders.MainForm.OrdersView object equals 49760.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "WM_GETCONTROLNAME", cmpEqual, 49760);
  //Checks whether the 'WM_GETCONTROLTYPE' property of the Aliases.Orders.MainForm.OrdersView object equals 49761.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "WM_GETCONTROLTYPE", cmpEqual, 49761);
  //Checks whether the 'Width' property of the Aliases.Orders.MainForm.OrdersView object equals 1536.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "Width", cmpEqual, 1536);
  //Checks whether the 'WinFormsControlName' property of the Aliases.Orders.MainForm.OrdersView object equals 'OrdersView'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "WinFormsControlName", cmpEqual, "OrdersView");
  //Checks whether the 'WndCaption' property of the Aliases.Orders.MainForm.OrdersView object equals ''.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "WndCaption", cmpEqual, "");
  //Checks whether the 'WndClass' property of the Aliases.Orders.MainForm.OrdersView object equals 'WindowsForms10.SysListView32.app.0.141b42a_r6_ad1'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "WndClass", cmpEqual, "WindowsForms10.SysListView32.app.0.141b42a_r6_ad1");
  //Checks whether the 'WndStyles' property of the Aliases.Orders.MainForm.OrdersView object equals 1442939213.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "WndStyles", cmpEqual, 1442939213);
  //Checks whether the 'WndStylesEx' property of the Aliases.Orders.MainForm.OrdersView object equals 512.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "WndStylesEx", cmpEqual, 512);
  //Checks whether the 'activation_2' property of the Aliases.Orders.MainForm.OrdersView object equals 'Standard'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "activation_2", cmpEqual, "Standard");
  //Checks whether the 'alignStyle' property of the Aliases.Orders.MainForm.OrdersView object equals 'Top'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "alignStyle", cmpEqual, "Top");
  //Checks whether the 'backgroundImageFileName' property of the Aliases.Orders.MainForm.OrdersView object equals ''.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "backgroundImageFileName", cmpEqual, "");
  //Checks whether the 'bkImgFileNamesCount' property of the Aliases.Orders.MainForm.OrdersView object equals -1.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "bkImgFileNamesCount", cmpEqual, -1);
  //Checks whether the 'borderStyle_2' property of the Aliases.Orders.MainForm.OrdersView object equals 'Fixed3D'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "borderStyle_2", cmpEqual, "Fixed3D");
  //Checks whether the 'checkForIllegalCrossThreadCalls_2' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "checkForIllegalCrossThreadCalls_2", cmpEqual, false);
  //Checks whether the 'clientHeight' property of the Aliases.Orders.MainForm.OrdersView object equals 767.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "clientHeight", cmpEqual, 767);
  //Checks whether the 'clientWidth' property of the Aliases.Orders.MainForm.OrdersView object equals 1532.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "clientWidth", cmpEqual, 1532);
  //Checks whether the 'columnHeaderClickedWidth' property of the Aliases.Orders.MainForm.OrdersView object equals -1.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "columnHeaderClickedWidth", cmpEqual, -1);
  //Checks whether the 'columnIndex' property of the Aliases.Orders.MainForm.OrdersView object equals 0.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "columnIndex", cmpEqual, 0);
  //Checks whether the 'controlStyle' property of the Aliases.Orders.MainForm.OrdersView object equals 'Selectable, StandardDoubleClick, AllPaintingInWmPaint'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "controlStyle", cmpEqual, "Selectable, StandardDoubleClick, AllPaintingInWmPaint");
  //Checks whether the 'deviceDpi_2' property of the Aliases.Orders.MainForm.OrdersView object equals 96.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "deviceDpi_2", cmpEqual, 96);
  //Checks whether the 'downButton' property of the Aliases.Orders.MainForm.OrdersView object equals 'Left'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "downButton", cmpEqual, "Left");
  //Checks whether the 'headerStyle_2' property of the Aliases.Orders.MainForm.OrdersView object equals 'Nonclickable'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "headerStyle_2", cmpEqual, "Nonclickable");
  //Checks whether the 'height_2' property of the Aliases.Orders.MainForm.OrdersView object equals 771.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "height_2", cmpEqual, 771);
  //Checks whether the 'hoveredAlready' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "hoveredAlready", cmpEqual, false);
  //Checks whether the 'ignoreWmImeNotify_2' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "ignoreWmImeNotify_2", cmpEqual, false);
  //Checks whether the 'inCrossThreadSafeCall' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "inCrossThreadSafeCall", cmpEqual, false);
  //Checks whether the 'itemCount' property of the Aliases.Orders.MainForm.OrdersView object equals 1.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "itemCount", cmpEqual, 1);
  //Checks whether the 'lastLanguageChinese' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "lastLanguageChinese", cmpEqual, false);
  //Checks whether the 'layoutSuspendCount' property of the Aliases.Orders.MainForm.OrdersView object equals 0.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "layoutSuspendCount", cmpEqual, 0);
  //Checks whether the 'mouseWheelInit' property of the Aliases.Orders.MainForm.OrdersView object equals True.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "mouseWheelInit", cmpEqual, true);
  //Checks whether the 'mouseWheelMessage' property of the Aliases.Orders.MainForm.OrdersView object equals 522.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "mouseWheelMessage", cmpEqual, 522);
  //Checks whether the 'mouseWheelRoutingNeeded' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "mouseWheelRoutingNeeded", cmpEqual, false);
  //Checks whether the 'needToLoadComCtl' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "needToLoadComCtl", cmpEqual, false);
  //Checks whether the 'newWidthForColumnWidthChangingCancelled' property of the Aliases.Orders.MainForm.OrdersView object equals -1.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "newWidthForColumnWidthChangingCancelled", cmpEqual, -1);
  //Checks whether the 'nextID' property of the Aliases.Orders.MainForm.OrdersView object equals 4.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "nextID", cmpEqual, 4);
  //Checks whether the 'odCacheFontHandle' property of the Aliases.Orders.MainForm.OrdersView object equals -854975132.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "odCacheFontHandle", cmpEqual, -854975132);
  //Checks whether the 'propagatingImeMode_2' property of the Aliases.Orders.MainForm.OrdersView object equals 'Inherit'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "propagatingImeMode_2", cmpEqual, "Inherit");
  //Checks whether the 'requiredScaling_2' property of the Aliases.Orders.MainForm.OrdersView object equals 31.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "requiredScaling_2", cmpEqual, 31);
  //Checks whether the 'rightToLeftLayout_2' property of the Aliases.Orders.MainForm.OrdersView object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "rightToLeftLayout_2", cmpEqual, false);
  //Checks whether the 'sorting_2' property of the Aliases.Orders.MainForm.OrdersView object equals 'None'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "sorting_2", cmpEqual, "None");
  //Checks whether the 'state' property of the Aliases.Orders.MainForm.OrdersView object equals 16908303.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "state", cmpEqual, 16908303);
  //Checks whether the 'state2' property of the Aliases.Orders.MainForm.OrdersView object equals 72.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "state2", cmpEqual, 72);
  //Checks whether the 'tabIndex_2' property of the Aliases.Orders.MainForm.OrdersView object equals 2.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "tabIndex_2", cmpEqual, 2);
  //Checks whether the 'threadCallbackMessage' property of the Aliases.Orders.MainForm.OrdersView object equals 49768.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "threadCallbackMessage", cmpEqual, 49768);
  //Checks whether the 'toolTipCaption' property of the Aliases.Orders.MainForm.OrdersView object equals ''.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "toolTipCaption", cmpEqual, "");
  //Checks whether the 'topIndex' property of the Aliases.Orders.MainForm.OrdersView object equals 0.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "topIndex", cmpEqual, 0);
  //Checks whether the 'uiCuesState' property of the Aliases.Orders.MainForm.OrdersView object equals 0.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "uiCuesState", cmpEqual, 0);
  //Checks whether the 'updateCount' property of the Aliases.Orders.MainForm.OrdersView object equals 0.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "updateCount", cmpEqual, 0);
  //Checks whether the 'updateCounter' property of the Aliases.Orders.MainForm.OrdersView object equals 0.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "updateCounter", cmpEqual, 0);
  //Checks whether the 'viewStyle' property of the Aliases.Orders.MainForm.OrdersView object equals 'Details'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "viewStyle", cmpEqual, "Details");
  //Checks whether the 'virtualListSize_2' property of the Aliases.Orders.MainForm.OrdersView object equals 0.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "virtualListSize_2", cmpEqual, 0);
  //Checks whether the 'wColumnCount' property of the Aliases.Orders.MainForm.OrdersView object equals 11.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "wColumnCount", cmpEqual, 11);
  //Checks whether the 'wGroupCount' property of the Aliases.Orders.MainForm.OrdersView object equals 0.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "wGroupCount", cmpEqual, 0);
  //Checks whether the 'wItemCount' property of the Aliases.Orders.MainForm.OrdersView object equals 1.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "wItemCount", cmpEqual, 1);
  //Checks whether the 'wListSeparator' property of the Aliases.Orders.MainForm.OrdersView object equals '
  //'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "wListSeparator", cmpEqual, "\r\n");
  //Checks whether the 'wSelectedItems' property of the Aliases.Orders.MainForm.OrdersView object equals 'levan'.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "wSelectedItems", cmpEqual, "levan");
  //Checks whether the 'width_2' property of the Aliases.Orders.MainForm.OrdersView object equals 1536.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "width_2", cmpEqual, 1536);
  //Checks whether the 'x' property of the Aliases.Orders.MainForm.OrdersView object equals 0.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "x", cmpEqual, 0);
  //Checks whether the 'y' property of the Aliases.Orders.MainForm.OrdersView object equals 28.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "y", cmpEqual, 28);
}