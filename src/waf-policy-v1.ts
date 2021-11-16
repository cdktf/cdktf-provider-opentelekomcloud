// https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafPolicyV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html#full_detection WafPolicyV1#full_detection}
  */
  readonly fullDetection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html#hosts WafPolicyV1#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html#level WafPolicyV1#level}
  */
  readonly level?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html#name WafPolicyV1#name}
  */
  readonly name: string;
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html#action WafPolicyV1#action}
  */
  readonly action?: WafPolicyV1Action;
  /**
  * options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html#options WafPolicyV1#options}
  */
  readonly options?: WafPolicyV1Options;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html#timeouts WafPolicyV1#timeouts}
  */
  readonly timeouts?: WafPolicyV1Timeouts;
}
export interface WafPolicyV1Action {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html#category WafPolicyV1#category}
  */
  readonly category: string;
}

function wafPolicyV1ActionToTerraform(struct?: WafPolicyV1ActionOutputReference | WafPolicyV1Action): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
  }
}

export class WafPolicyV1ActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category
  }
}
export interface WafPolicyV1Options {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html#antitamper WafPolicyV1#antitamper}
  */
  readonly antitamper?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html#cc WafPolicyV1#cc}
  */
  readonly cc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html#common WafPolicyV1#common}
  */
  readonly common?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html#crawler WafPolicyV1#crawler}
  */
  readonly crawler?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html#crawler_engine WafPolicyV1#crawler_engine}
  */
  readonly crawlerEngine?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html#crawler_other WafPolicyV1#crawler_other}
  */
  readonly crawlerOther?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html#crawler_scanner WafPolicyV1#crawler_scanner}
  */
  readonly crawlerScanner?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html#crawler_script WafPolicyV1#crawler_script}
  */
  readonly crawlerScript?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html#custom WafPolicyV1#custom}
  */
  readonly custom?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html#ignore WafPolicyV1#ignore}
  */
  readonly ignore?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html#privacy WafPolicyV1#privacy}
  */
  readonly privacy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html#webattack WafPolicyV1#webattack}
  */
  readonly webattack?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html#webshell WafPolicyV1#webshell}
  */
  readonly webshell?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html#whiteblackip WafPolicyV1#whiteblackip}
  */
  readonly whiteblackip?: boolean | cdktf.IResolvable;
}

function wafPolicyV1OptionsToTerraform(struct?: WafPolicyV1OptionsOutputReference | WafPolicyV1Options): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    antitamper: cdktf.booleanToTerraform(struct!.antitamper),
    cc: cdktf.booleanToTerraform(struct!.cc),
    common: cdktf.booleanToTerraform(struct!.common),
    crawler: cdktf.booleanToTerraform(struct!.crawler),
    crawler_engine: cdktf.booleanToTerraform(struct!.crawlerEngine),
    crawler_other: cdktf.booleanToTerraform(struct!.crawlerOther),
    crawler_scanner: cdktf.booleanToTerraform(struct!.crawlerScanner),
    crawler_script: cdktf.booleanToTerraform(struct!.crawlerScript),
    custom: cdktf.booleanToTerraform(struct!.custom),
    ignore: cdktf.booleanToTerraform(struct!.ignore),
    privacy: cdktf.booleanToTerraform(struct!.privacy),
    webattack: cdktf.booleanToTerraform(struct!.webattack),
    webshell: cdktf.booleanToTerraform(struct!.webshell),
    whiteblackip: cdktf.booleanToTerraform(struct!.whiteblackip),
  }
}

export class WafPolicyV1OptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // antitamper - computed: true, optional: true, required: false
  private _antitamper?: boolean | cdktf.IResolvable | undefined; 
  public get antitamper() {
    return this.getBooleanAttribute('antitamper') as any;
  }
  public set antitamper(value: boolean | cdktf.IResolvable | undefined) {
    this._antitamper = value;
  }
  public resetAntitamper() {
    this._antitamper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antitamperInput() {
    return this._antitamper
  }

  // cc - computed: true, optional: true, required: false
  private _cc?: boolean | cdktf.IResolvable | undefined; 
  public get cc() {
    return this.getBooleanAttribute('cc') as any;
  }
  public set cc(value: boolean | cdktf.IResolvable | undefined) {
    this._cc = value;
  }
  public resetCc() {
    this._cc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccInput() {
    return this._cc
  }

  // common - computed: true, optional: true, required: false
  private _common?: boolean | cdktf.IResolvable | undefined; 
  public get common() {
    return this.getBooleanAttribute('common') as any;
  }
  public set common(value: boolean | cdktf.IResolvable | undefined) {
    this._common = value;
  }
  public resetCommon() {
    this._common = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonInput() {
    return this._common
  }

  // crawler - computed: true, optional: true, required: false
  private _crawler?: boolean | cdktf.IResolvable | undefined; 
  public get crawler() {
    return this.getBooleanAttribute('crawler') as any;
  }
  public set crawler(value: boolean | cdktf.IResolvable | undefined) {
    this._crawler = value;
  }
  public resetCrawler() {
    this._crawler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerInput() {
    return this._crawler
  }

  // crawler_engine - computed: true, optional: true, required: false
  private _crawlerEngine?: boolean | cdktf.IResolvable | undefined; 
  public get crawlerEngine() {
    return this.getBooleanAttribute('crawler_engine') as any;
  }
  public set crawlerEngine(value: boolean | cdktf.IResolvable | undefined) {
    this._crawlerEngine = value;
  }
  public resetCrawlerEngine() {
    this._crawlerEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerEngineInput() {
    return this._crawlerEngine
  }

  // crawler_other - computed: true, optional: true, required: false
  private _crawlerOther?: boolean | cdktf.IResolvable | undefined; 
  public get crawlerOther() {
    return this.getBooleanAttribute('crawler_other') as any;
  }
  public set crawlerOther(value: boolean | cdktf.IResolvable | undefined) {
    this._crawlerOther = value;
  }
  public resetCrawlerOther() {
    this._crawlerOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerOtherInput() {
    return this._crawlerOther
  }

  // crawler_scanner - computed: true, optional: true, required: false
  private _crawlerScanner?: boolean | cdktf.IResolvable | undefined; 
  public get crawlerScanner() {
    return this.getBooleanAttribute('crawler_scanner') as any;
  }
  public set crawlerScanner(value: boolean | cdktf.IResolvable | undefined) {
    this._crawlerScanner = value;
  }
  public resetCrawlerScanner() {
    this._crawlerScanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerScannerInput() {
    return this._crawlerScanner
  }

  // crawler_script - computed: true, optional: true, required: false
  private _crawlerScript?: boolean | cdktf.IResolvable | undefined; 
  public get crawlerScript() {
    return this.getBooleanAttribute('crawler_script') as any;
  }
  public set crawlerScript(value: boolean | cdktf.IResolvable | undefined) {
    this._crawlerScript = value;
  }
  public resetCrawlerScript() {
    this._crawlerScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerScriptInput() {
    return this._crawlerScript
  }

  // custom - computed: true, optional: true, required: false
  private _custom?: boolean | cdktf.IResolvable | undefined; 
  public get custom() {
    return this.getBooleanAttribute('custom') as any;
  }
  public set custom(value: boolean | cdktf.IResolvable | undefined) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom
  }

  // ignore - computed: true, optional: true, required: false
  private _ignore?: boolean | cdktf.IResolvable | undefined; 
  public get ignore() {
    return this.getBooleanAttribute('ignore') as any;
  }
  public set ignore(value: boolean | cdktf.IResolvable | undefined) {
    this._ignore = value;
  }
  public resetIgnore() {
    this._ignore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInput() {
    return this._ignore
  }

  // privacy - computed: true, optional: true, required: false
  private _privacy?: boolean | cdktf.IResolvable | undefined; 
  public get privacy() {
    return this.getBooleanAttribute('privacy') as any;
  }
  public set privacy(value: boolean | cdktf.IResolvable | undefined) {
    this._privacy = value;
  }
  public resetPrivacy() {
    this._privacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyInput() {
    return this._privacy
  }

  // webattack - computed: true, optional: true, required: false
  private _webattack?: boolean | cdktf.IResolvable | undefined; 
  public get webattack() {
    return this.getBooleanAttribute('webattack') as any;
  }
  public set webattack(value: boolean | cdktf.IResolvable | undefined) {
    this._webattack = value;
  }
  public resetWebattack() {
    this._webattack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webattackInput() {
    return this._webattack
  }

  // webshell - computed: true, optional: true, required: false
  private _webshell?: boolean | cdktf.IResolvable | undefined; 
  public get webshell() {
    return this.getBooleanAttribute('webshell') as any;
  }
  public set webshell(value: boolean | cdktf.IResolvable | undefined) {
    this._webshell = value;
  }
  public resetWebshell() {
    this._webshell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webshellInput() {
    return this._webshell
  }

  // whiteblackip - computed: true, optional: true, required: false
  private _whiteblackip?: boolean | cdktf.IResolvable | undefined; 
  public get whiteblackip() {
    return this.getBooleanAttribute('whiteblackip') as any;
  }
  public set whiteblackip(value: boolean | cdktf.IResolvable | undefined) {
    this._whiteblackip = value;
  }
  public resetWhiteblackip() {
    this._whiteblackip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteblackipInput() {
    return this._whiteblackip
  }
}
export interface WafPolicyV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html#create WafPolicyV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html#delete WafPolicyV1#delete}
  */
  readonly delete?: string;
}

function wafPolicyV1TimeoutsToTerraform(struct?: WafPolicyV1TimeoutsOutputReference | WafPolicyV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class WafPolicyV1TimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html opentelekomcloud_waf_policy_v1}
*/
export class WafPolicyV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_waf_policy_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/waf_policy_v1.html opentelekomcloud_waf_policy_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafPolicyV1Config
  */
  public constructor(scope: Construct, id: string, config: WafPolicyV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_waf_policy_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._fullDetection = config.fullDetection;
    this._hosts = config.hosts;
    this._level = config.level;
    this._name = config.name;
    this._action = config.action;
    this._options = config.options;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // full_detection - computed: true, optional: true, required: false
  private _fullDetection?: boolean | cdktf.IResolvable | undefined; 
  public get fullDetection() {
    return this.getBooleanAttribute('full_detection') as any;
  }
  public set fullDetection(value: boolean | cdktf.IResolvable | undefined) {
    this._fullDetection = value;
  }
  public resetFullDetection() {
    this._fullDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullDetectionInput() {
    return this._fullDetection
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts?: string[] | undefined; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[] | undefined) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // level - computed: true, optional: true, required: false
  private _level?: number | undefined; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number | undefined) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // action - computed: false, optional: true, required: false
  private _action?: WafPolicyV1Action | undefined; 
  private __actionOutput = new WafPolicyV1ActionOutputReference(this as any, "action", true);
  public get action() {
    return this.__actionOutput;
  }
  public putAction(value: WafPolicyV1Action | undefined) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // options - computed: false, optional: true, required: false
  private _options?: WafPolicyV1Options | undefined; 
  private __optionsOutput = new WafPolicyV1OptionsOutputReference(this as any, "options", true);
  public get options() {
    return this.__optionsOutput;
  }
  public putOptions(value: WafPolicyV1Options | undefined) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: WafPolicyV1Timeouts | undefined; 
  private __timeoutsOutput = new WafPolicyV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: WafPolicyV1Timeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      full_detection: cdktf.booleanToTerraform(this._fullDetection),
      hosts: cdktf.listMapper(cdktf.stringToTerraform)(this._hosts),
      level: cdktf.numberToTerraform(this._level),
      name: cdktf.stringToTerraform(this._name),
      action: wafPolicyV1ActionToTerraform(this._action),
      options: wafPolicyV1OptionsToTerraform(this._options),
      timeouts: wafPolicyV1TimeoutsToTerraform(this._timeouts),
    };
  }
}
