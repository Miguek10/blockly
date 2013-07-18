// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof graphpage == 'undefined') { var graphpage = {}; }


graphpage.start = function(opt_data, opt_ignored) {
  return '<div id="MSG" style="display: none"><span id="title">Függvényrajzoló</span><span id="unloadWarning">Az oldal elhagyása a munkád elvesztését eredményezi.</span><div id="COMMON_MSG" style="display: none"><span id="blocklyMessage">Blockly</span><span id="httpRequestError">A kéréssel kapcsolatban probléma merült fel.</span><span id="linkAlert">Ezzel a hivatkozással tudod megosztani a programodat:\n\n%1</span><span id="hashError">Elnézést, a \'%1\' hivatkozásnem tartozik egyetlen programhoz sem.</span><span id="xmlError">A programodat nem lehet betölteni.  Elképzelhető, hogy a Blockly egy másik verziójában készült?</span></div><table width="100%" height="100%"><tr height="50"><td colspan=2><h1><a href="../index.html">Blockly</a> : Graphing Calculator<button id="linkButton" title="Mentés és Hivatkozás a kódhoz. " onclick="BlocklyStorage.link();"><img src=\'link.png\' height=21 width=21></button></h1></td></tr><tr><td width="410" valign="top"><div id="visualization"></div><div id="funcText"><img id="y1" src="../../media/1x1.gif">...</div></td><td valign="top"><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../javascript_compressed.js"><\/script><script type="text/javascript" src="../common.js"><\/script><script type="text/javascript">BlocklyApps.loadLanguageScripts(languageSrc);<\/script><script type="text/javascript" src="blocks.js"><\/script>' + graphpage.toolbox(null) + '<div id="blockly"></div></td></tr></table>';
};


graphpage.toolbox = function(opt_data, opt_ignored) {
  return '<xml id="toolbox" style="display: none"><category name="Matematikai műveletek"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_round"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><title name="NUM">1</title></block></value><value name="HIGH"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_float"></block></category><category name="Változók" custom="VARIABLE"></category><block type="graph_get_x"></block></category><category name="Logikai műveletek"><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category></xml>';
};
