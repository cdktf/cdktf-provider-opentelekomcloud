// https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CbrVaultV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#auto_bind CbrVaultV3#auto_bind}
  */
  readonly autoBind?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#auto_expand CbrVaultV3#auto_expand}
  */
  readonly autoExpand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#backup_policy_id CbrVaultV3#backup_policy_id}
  */
  readonly backupPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#description CbrVaultV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#enterprise_project_id CbrVaultV3#enterprise_project_id}
  */
  readonly enterpriseProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#name CbrVaultV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#resource CbrVaultV3#resource}
  */
  readonly resource?: CbrVaultV3Resource[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#tags CbrVaultV3#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * billing block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#billing CbrVaultV3#billing}
  */
  readonly billing: CbrVaultV3Billing;
  /**
  * bind_rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#bind_rules CbrVaultV3#bind_rules}
  */
  readonly bindRules?: CbrVaultV3BindRules[];
}
export interface CbrVaultV3Resource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#backup_count CbrVaultV3#backup_count}
  */
  readonly backupCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#backup_size CbrVaultV3#backup_size}
  */
  readonly backupSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#extra_info CbrVaultV3#extra_info}
  */
  readonly extraInfo?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#id CbrVaultV3#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#name CbrVaultV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#protect_status CbrVaultV3#protect_status}
  */
  readonly protectStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#size CbrVaultV3#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#type CbrVaultV3#type}
  */
  readonly type?: string;
}

export function cbrVaultV3ResourceToTerraform(struct?: CbrVaultV3Resource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_count: cdktf.numberToTerraform(struct!.backupCount),
    backup_size: cdktf.numberToTerraform(struct!.backupSize),
    extra_info: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.extraInfo),
    name: cdktf.stringToTerraform(struct!.name),
    protect_status: cdktf.stringToTerraform(struct!.protectStatus),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface CbrVaultV3Billing {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#charging_mode CbrVaultV3#charging_mode}
  */
  readonly chargingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#cloud_type CbrVaultV3#cloud_type}
  */
  readonly cloudType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#consistent_level CbrVaultV3#consistent_level}
  */
  readonly consistentLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#console_url CbrVaultV3#console_url}
  */
  readonly consoleUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#extra_info CbrVaultV3#extra_info}
  */
  readonly extraInfo?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#is_auto_pay CbrVaultV3#is_auto_pay}
  */
  readonly isAutoPay?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#is_auto_renew CbrVaultV3#is_auto_renew}
  */
  readonly isAutoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#object_type CbrVaultV3#object_type}
  */
  readonly objectType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#period_num CbrVaultV3#period_num}
  */
  readonly periodNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#period_type CbrVaultV3#period_type}
  */
  readonly periodType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#protect_type CbrVaultV3#protect_type}
  */
  readonly protectType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#size CbrVaultV3#size}
  */
  readonly size: number;
}

export function cbrVaultV3BillingToTerraform(struct?: CbrVaultV3BillingOutputReference | CbrVaultV3Billing): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    charging_mode: cdktf.stringToTerraform(struct!.chargingMode),
    cloud_type: cdktf.stringToTerraform(struct!.cloudType),
    consistent_level: cdktf.stringToTerraform(struct!.consistentLevel),
    console_url: cdktf.stringToTerraform(struct!.consoleUrl),
    extra_info: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.extraInfo),
    is_auto_pay: cdktf.booleanToTerraform(struct!.isAutoPay),
    is_auto_renew: cdktf.booleanToTerraform(struct!.isAutoRenew),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    period_num: cdktf.numberToTerraform(struct!.periodNum),
    period_type: cdktf.stringToTerraform(struct!.periodType),
    protect_type: cdktf.stringToTerraform(struct!.protectType),
    size: cdktf.numberToTerraform(struct!.size),
  }
}

export class CbrVaultV3BillingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CbrVaultV3Billing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chargingMode) {
      hasAnyValues = true;
      internalValueResult.chargingMode = this._chargingMode;
    }
    if (this._cloudType) {
      hasAnyValues = true;
      internalValueResult.cloudType = this._cloudType;
    }
    if (this._consistentLevel) {
      hasAnyValues = true;
      internalValueResult.consistentLevel = this._consistentLevel;
    }
    if (this._consoleUrl) {
      hasAnyValues = true;
      internalValueResult.consoleUrl = this._consoleUrl;
    }
    if (this._extraInfo) {
      hasAnyValues = true;
      internalValueResult.extraInfo = this._extraInfo;
    }
    if (this._isAutoPay) {
      hasAnyValues = true;
      internalValueResult.isAutoPay = this._isAutoPay;
    }
    if (this._isAutoRenew) {
      hasAnyValues = true;
      internalValueResult.isAutoRenew = this._isAutoRenew;
    }
    if (this._objectType) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._periodNum) {
      hasAnyValues = true;
      internalValueResult.periodNum = this._periodNum;
    }
    if (this._periodType) {
      hasAnyValues = true;
      internalValueResult.periodType = this._periodType;
    }
    if (this._protectType) {
      hasAnyValues = true;
      internalValueResult.protectType = this._protectType;
    }
    if (this._size) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CbrVaultV3Billing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chargingMode = undefined;
      this._cloudType = undefined;
      this._consistentLevel = undefined;
      this._consoleUrl = undefined;
      this._extraInfo = undefined;
      this._isAutoPay = undefined;
      this._isAutoRenew = undefined;
      this._objectType = undefined;
      this._periodNum = undefined;
      this._periodType = undefined;
      this._protectType = undefined;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chargingMode = value.chargingMode;
      this._cloudType = value.cloudType;
      this._consistentLevel = value.consistentLevel;
      this._consoleUrl = value.consoleUrl;
      this._extraInfo = value.extraInfo;
      this._isAutoPay = value.isAutoPay;
      this._isAutoRenew = value.isAutoRenew;
      this._objectType = value.objectType;
      this._periodNum = value.periodNum;
      this._periodType = value.periodType;
      this._protectType = value.protectType;
      this._size = value.size;
    }
  }

  // charging_mode - computed: false, optional: true, required: false
  private _chargingMode?: string; 
  public get chargingMode() {
    return this.getStringAttribute('charging_mode');
  }
  public set chargingMode(value: string) {
    this._chargingMode = value;
  }
  public resetChargingMode() {
    this._chargingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargingModeInput() {
    return this._chargingMode;
  }

  // cloud_type - computed: false, optional: true, required: false
  private _cloudType?: string; 
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }
  public set cloudType(value: string) {
    this._cloudType = value;
  }
  public resetCloudType() {
    this._cloudType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
  }

  // consistent_level - computed: false, optional: true, required: false
  private _consistentLevel?: string; 
  public get consistentLevel() {
    return this.getStringAttribute('consistent_level');
  }
  public set consistentLevel(value: string) {
    this._consistentLevel = value;
  }
  public resetConsistentLevel() {
    this._consistentLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistentLevelInput() {
    return this._consistentLevel;
  }

  // console_url - computed: false, optional: true, required: false
  private _consoleUrl?: string; 
  public get consoleUrl() {
    return this.getStringAttribute('console_url');
  }
  public set consoleUrl(value: string) {
    this._consoleUrl = value;
  }
  public resetConsoleUrl() {
    this._consoleUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleUrlInput() {
    return this._consoleUrl;
  }

  // extra_info - computed: false, optional: true, required: false
  private _extraInfo?: { [key: string]: string } | cdktf.IResolvable; 
  public get extraInfo() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('extra_info') as any;
  }
  public set extraInfo(value: { [key: string]: string } | cdktf.IResolvable) {
    this._extraInfo = value;
  }
  public resetExtraInfo() {
    this._extraInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraInfoInput() {
    return this._extraInfo;
  }

  // is_auto_pay - computed: false, optional: true, required: false
  private _isAutoPay?: boolean | cdktf.IResolvable; 
  public get isAutoPay() {
    return this.getBooleanAttribute('is_auto_pay') as any;
  }
  public set isAutoPay(value: boolean | cdktf.IResolvable) {
    this._isAutoPay = value;
  }
  public resetIsAutoPay() {
    this._isAutoPay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoPayInput() {
    return this._isAutoPay;
  }

  // is_auto_renew - computed: false, optional: true, required: false
  private _isAutoRenew?: boolean | cdktf.IResolvable; 
  public get isAutoRenew() {
    return this.getBooleanAttribute('is_auto_renew') as any;
  }
  public set isAutoRenew(value: boolean | cdktf.IResolvable) {
    this._isAutoRenew = value;
  }
  public resetIsAutoRenew() {
    this._isAutoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoRenewInput() {
    return this._isAutoRenew;
  }

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // period_num - computed: false, optional: true, required: false
  private _periodNum?: number; 
  public get periodNum() {
    return this.getNumberAttribute('period_num');
  }
  public set periodNum(value: number) {
    this._periodNum = value;
  }
  public resetPeriodNum() {
    this._periodNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodNumInput() {
    return this._periodNum;
  }

  // period_type - computed: false, optional: true, required: false
  private _periodType?: string; 
  public get periodType() {
    return this.getStringAttribute('period_type');
  }
  public set periodType(value: string) {
    this._periodType = value;
  }
  public resetPeriodType() {
    this._periodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodTypeInput() {
    return this._periodType;
  }

  // protect_type - computed: false, optional: false, required: true
  private _protectType?: string; 
  public get protectType() {
    return this.getStringAttribute('protect_type');
  }
  public set protectType(value: string) {
    this._protectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectTypeInput() {
    return this._protectType;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface CbrVaultV3BindRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#key CbrVaultV3#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html#value CbrVaultV3#value}
  */
  readonly value: string;
}

export function cbrVaultV3BindRulesToTerraform(struct?: CbrVaultV3BindRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html opentelekomcloud_cbr_vault_v3}
*/
export class CbrVaultV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_cbr_vault_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cbr_vault_v3.html opentelekomcloud_cbr_vault_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CbrVaultV3Config
  */
  public constructor(scope: Construct, id: string, config: CbrVaultV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_cbr_vault_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoBind = config.autoBind;
    this._autoExpand = config.autoExpand;
    this._backupPolicyId = config.backupPolicyId;
    this._description = config.description;
    this._enterpriseProjectId = config.enterpriseProjectId;
    this._name = config.name;
    this._resource = config.resource;
    this._tags = config.tags;
    this._billing.internalValue = config.billing;
    this._bindRules = config.bindRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_bind - computed: true, optional: true, required: false
  private _autoBind?: boolean | cdktf.IResolvable; 
  public get autoBind() {
    return this.getBooleanAttribute('auto_bind') as any;
  }
  public set autoBind(value: boolean | cdktf.IResolvable) {
    this._autoBind = value;
  }
  public resetAutoBind() {
    this._autoBind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBindInput() {
    return this._autoBind;
  }

  // auto_expand - computed: true, optional: true, required: false
  private _autoExpand?: boolean | cdktf.IResolvable; 
  public get autoExpand() {
    return this.getBooleanAttribute('auto_expand') as any;
  }
  public set autoExpand(value: boolean | cdktf.IResolvable) {
    this._autoExpand = value;
  }
  public resetAutoExpand() {
    this._autoExpand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoExpandInput() {
    return this._autoExpand;
  }

  // backup_policy_id - computed: false, optional: true, required: false
  private _backupPolicyId?: string; 
  public get backupPolicyId() {
    return this.getStringAttribute('backup_policy_id');
  }
  public set backupPolicyId(value: string) {
    this._backupPolicyId = value;
  }
  public resetBackupPolicyId() {
    this._backupPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyIdInput() {
    return this._backupPolicyId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enterprise_project_id - computed: true, optional: true, required: false
  private _enterpriseProjectId?: string; 
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }
  public set enterpriseProjectId(value: string) {
    this._enterpriseProjectId = value;
  }
  public resetEnterpriseProjectId() {
    this._enterpriseProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseProjectIdInput() {
    return this._enterpriseProjectId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._name;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // provider_id - computed: true, optional: false, required: false
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }

  // resource - computed: true, optional: true, required: false
  private _resource?: CbrVaultV3Resource[]; 
  public get resource() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource') as any;
  }
  public set resource(value: CbrVaultV3Resource[]) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // billing - computed: false, optional: false, required: true
  private _billing = new CbrVaultV3BillingOutputReference(this as any, "billing", true);
  public get billing() {
    return this._billing;
  }
  public putBilling(value: CbrVaultV3Billing) {
    this._billing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingInput() {
    return this._billing.internalValue;
  }

  // bind_rules - computed: false, optional: true, required: false
  private _bindRules?: CbrVaultV3BindRules[]; 
  public get bindRules() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('bind_rules') as any;
  }
  public set bindRules(value: CbrVaultV3BindRules[]) {
    this._bindRules = value;
  }
  public resetBindRules() {
    this._bindRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindRulesInput() {
    return this._bindRules;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_bind: cdktf.booleanToTerraform(this._autoBind),
      auto_expand: cdktf.booleanToTerraform(this._autoExpand),
      backup_policy_id: cdktf.stringToTerraform(this._backupPolicyId),
      description: cdktf.stringToTerraform(this._description),
      enterprise_project_id: cdktf.stringToTerraform(this._enterpriseProjectId),
      name: cdktf.stringToTerraform(this._name),
      resource: cdktf.listMapper(cbrVaultV3ResourceToTerraform)(this._resource),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      billing: cbrVaultV3BillingToTerraform(this._billing.internalValue),
      bind_rules: cdktf.listMapper(cbrVaultV3BindRulesToTerraform)(this._bindRules),
    };
  }
}
