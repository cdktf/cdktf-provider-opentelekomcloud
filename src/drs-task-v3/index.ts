/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DrsTaskV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#description DrsTaskV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#destination_db_readonly DrsTaskV3#destination_db_readonly}
  */
  readonly destinationDbReadonly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#direction DrsTaskV3#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}
  */
  readonly engineType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#expired_days DrsTaskV3#expired_days}
  */
  readonly expiredDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#force_destroy DrsTaskV3#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#id DrsTaskV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#migrate_definer DrsTaskV3#migrate_definer}
  */
  readonly migrateDefiner?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#migration_type DrsTaskV3#migration_type}
  */
  readonly migrationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#multi_write DrsTaskV3#multi_write}
  */
  readonly multiWrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#name DrsTaskV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#net_type DrsTaskV3#net_type}
  */
  readonly netType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#node_num DrsTaskV3#node_num}
  */
  readonly nodeNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#start_time DrsTaskV3#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#tags DrsTaskV3#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#type DrsTaskV3#type}
  */
  readonly type: string;
  /**
  * destination_db block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#destination_db DrsTaskV3#destination_db}
  */
  readonly destinationDb: DrsTaskV3DestinationDb;
  /**
  * limit_speed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#limit_speed DrsTaskV3#limit_speed}
  */
  readonly limitSpeed?: DrsTaskV3LimitSpeed[] | cdktf.IResolvable;
  /**
  * source_db block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#source_db DrsTaskV3#source_db}
  */
  readonly sourceDb: DrsTaskV3SourceDb;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#timeouts DrsTaskV3#timeouts}
  */
  readonly timeouts?: DrsTaskV3Timeouts;
}
export interface DrsTaskV3DestinationDb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}
  */
  readonly engineType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#instance_id DrsTaskV3#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#ip DrsTaskV3#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#name DrsTaskV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#password DrsTaskV3#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#port DrsTaskV3#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#region DrsTaskV3#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#ssl_cert_check_sum DrsTaskV3#ssl_cert_check_sum}
  */
  readonly sslCertCheckSum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#ssl_cert_key DrsTaskV3#ssl_cert_key}
  */
  readonly sslCertKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#ssl_cert_name DrsTaskV3#ssl_cert_name}
  */
  readonly sslCertName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#ssl_cert_password DrsTaskV3#ssl_cert_password}
  */
  readonly sslCertPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#ssl_enabled DrsTaskV3#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#subnet_id DrsTaskV3#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#user DrsTaskV3#user}
  */
  readonly user: string;
}

export function drsTaskV3DestinationDbToTerraform(struct?: DrsTaskV3DestinationDbOutputReference | DrsTaskV3DestinationDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    engine_type: cdktf.stringToTerraform(struct!.engineType),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    ip: cdktf.stringToTerraform(struct!.ip),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    region: cdktf.stringToTerraform(struct!.region),
    ssl_cert_check_sum: cdktf.stringToTerraform(struct!.sslCertCheckSum),
    ssl_cert_key: cdktf.stringToTerraform(struct!.sslCertKey),
    ssl_cert_name: cdktf.stringToTerraform(struct!.sslCertName),
    ssl_cert_password: cdktf.stringToTerraform(struct!.sslCertPassword),
    ssl_enabled: cdktf.booleanToTerraform(struct!.sslEnabled),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function drsTaskV3DestinationDbToHclTerraform(struct?: DrsTaskV3DestinationDbOutputReference | DrsTaskV3DestinationDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    engine_type: {
      value: cdktf.stringToHclTerraform(struct!.engineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_cert_check_sum: {
      value: cdktf.stringToHclTerraform(struct!.sslCertCheckSum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_cert_key: {
      value: cdktf.stringToHclTerraform(struct!.sslCertKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_cert_name: {
      value: cdktf.stringToHclTerraform(struct!.sslCertName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_cert_password: {
      value: cdktf.stringToHclTerraform(struct!.sslCertPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sslEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DrsTaskV3DestinationDbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DrsTaskV3DestinationDb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._engineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineType = this._engineType;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._sslCertCheckSum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertCheckSum = this._sslCertCheckSum;
    }
    if (this._sslCertKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertKey = this._sslCertKey;
    }
    if (this._sslCertName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertName = this._sslCertName;
    }
    if (this._sslCertPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertPassword = this._sslCertPassword;
    }
    if (this._sslEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslEnabled = this._sslEnabled;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DrsTaskV3DestinationDb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._engineType = undefined;
      this._instanceId = undefined;
      this._ip = undefined;
      this._name = undefined;
      this._password = undefined;
      this._port = undefined;
      this._region = undefined;
      this._sslCertCheckSum = undefined;
      this._sslCertKey = undefined;
      this._sslCertName = undefined;
      this._sslCertPassword = undefined;
      this._sslEnabled = undefined;
      this._subnetId = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._engineType = value.engineType;
      this._instanceId = value.instanceId;
      this._ip = value.ip;
      this._name = value.name;
      this._password = value.password;
      this._port = value.port;
      this._region = value.region;
      this._sslCertCheckSum = value.sslCertCheckSum;
      this._sslCertKey = value.sslCertKey;
      this._sslCertName = value.sslCertName;
      this._sslCertPassword = value.sslCertPassword;
      this._sslEnabled = value.sslEnabled;
      this._subnetId = value.subnetId;
      this._user = value.user;
    }
  }

  // engine_type - computed: false, optional: false, required: true
  private _engineType?: string; 
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }
  public set engineType(value: string) {
    this._engineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineTypeInput() {
    return this._engineType;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // ssl_cert_check_sum - computed: false, optional: true, required: false
  private _sslCertCheckSum?: string; 
  public get sslCertCheckSum() {
    return this.getStringAttribute('ssl_cert_check_sum');
  }
  public set sslCertCheckSum(value: string) {
    this._sslCertCheckSum = value;
  }
  public resetSslCertCheckSum() {
    this._sslCertCheckSum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertCheckSumInput() {
    return this._sslCertCheckSum;
  }

  // ssl_cert_key - computed: false, optional: true, required: false
  private _sslCertKey?: string; 
  public get sslCertKey() {
    return this.getStringAttribute('ssl_cert_key');
  }
  public set sslCertKey(value: string) {
    this._sslCertKey = value;
  }
  public resetSslCertKey() {
    this._sslCertKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertKeyInput() {
    return this._sslCertKey;
  }

  // ssl_cert_name - computed: false, optional: true, required: false
  private _sslCertName?: string; 
  public get sslCertName() {
    return this.getStringAttribute('ssl_cert_name');
  }
  public set sslCertName(value: string) {
    this._sslCertName = value;
  }
  public resetSslCertName() {
    this._sslCertName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertNameInput() {
    return this._sslCertName;
  }

  // ssl_cert_password - computed: false, optional: true, required: false
  private _sslCertPassword?: string; 
  public get sslCertPassword() {
    return this.getStringAttribute('ssl_cert_password');
  }
  public set sslCertPassword(value: string) {
    this._sslCertPassword = value;
  }
  public resetSslCertPassword() {
    this._sslCertPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertPasswordInput() {
    return this._sslCertPassword;
  }

  // ssl_enabled - computed: false, optional: true, required: false
  private _sslEnabled?: boolean | cdktf.IResolvable; 
  public get sslEnabled() {
    return this.getBooleanAttribute('ssl_enabled');
  }
  public set sslEnabled(value: boolean | cdktf.IResolvable) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DrsTaskV3LimitSpeed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#end_time DrsTaskV3#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#speed DrsTaskV3#speed}
  */
  readonly speed: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#start_time DrsTaskV3#start_time}
  */
  readonly startTime: string;
}

export function drsTaskV3LimitSpeedToTerraform(struct?: DrsTaskV3LimitSpeed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    speed: cdktf.stringToTerraform(struct!.speed),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function drsTaskV3LimitSpeedToHclTerraform(struct?: DrsTaskV3LimitSpeed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    speed: {
      value: cdktf.stringToHclTerraform(struct!.speed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DrsTaskV3LimitSpeedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DrsTaskV3LimitSpeed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._speed !== undefined) {
      hasAnyValues = true;
      internalValueResult.speed = this._speed;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DrsTaskV3LimitSpeed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._speed = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._speed = value.speed;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // speed - computed: false, optional: false, required: true
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class DrsTaskV3LimitSpeedList extends cdktf.ComplexList {
  public internalValue? : DrsTaskV3LimitSpeed[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DrsTaskV3LimitSpeedOutputReference {
    return new DrsTaskV3LimitSpeedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DrsTaskV3SourceDb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}
  */
  readonly engineType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#instance_id DrsTaskV3#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#ip DrsTaskV3#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#name DrsTaskV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#password DrsTaskV3#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#port DrsTaskV3#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#region DrsTaskV3#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#ssl_cert_check_sum DrsTaskV3#ssl_cert_check_sum}
  */
  readonly sslCertCheckSum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#ssl_cert_key DrsTaskV3#ssl_cert_key}
  */
  readonly sslCertKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#ssl_cert_name DrsTaskV3#ssl_cert_name}
  */
  readonly sslCertName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#ssl_cert_password DrsTaskV3#ssl_cert_password}
  */
  readonly sslCertPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#ssl_enabled DrsTaskV3#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#subnet_id DrsTaskV3#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#user DrsTaskV3#user}
  */
  readonly user: string;
}

export function drsTaskV3SourceDbToTerraform(struct?: DrsTaskV3SourceDbOutputReference | DrsTaskV3SourceDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    engine_type: cdktf.stringToTerraform(struct!.engineType),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    ip: cdktf.stringToTerraform(struct!.ip),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    region: cdktf.stringToTerraform(struct!.region),
    ssl_cert_check_sum: cdktf.stringToTerraform(struct!.sslCertCheckSum),
    ssl_cert_key: cdktf.stringToTerraform(struct!.sslCertKey),
    ssl_cert_name: cdktf.stringToTerraform(struct!.sslCertName),
    ssl_cert_password: cdktf.stringToTerraform(struct!.sslCertPassword),
    ssl_enabled: cdktf.booleanToTerraform(struct!.sslEnabled),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function drsTaskV3SourceDbToHclTerraform(struct?: DrsTaskV3SourceDbOutputReference | DrsTaskV3SourceDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    engine_type: {
      value: cdktf.stringToHclTerraform(struct!.engineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_cert_check_sum: {
      value: cdktf.stringToHclTerraform(struct!.sslCertCheckSum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_cert_key: {
      value: cdktf.stringToHclTerraform(struct!.sslCertKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_cert_name: {
      value: cdktf.stringToHclTerraform(struct!.sslCertName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_cert_password: {
      value: cdktf.stringToHclTerraform(struct!.sslCertPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sslEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DrsTaskV3SourceDbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DrsTaskV3SourceDb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._engineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineType = this._engineType;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._sslCertCheckSum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertCheckSum = this._sslCertCheckSum;
    }
    if (this._sslCertKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertKey = this._sslCertKey;
    }
    if (this._sslCertName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertName = this._sslCertName;
    }
    if (this._sslCertPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertPassword = this._sslCertPassword;
    }
    if (this._sslEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslEnabled = this._sslEnabled;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DrsTaskV3SourceDb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._engineType = undefined;
      this._instanceId = undefined;
      this._ip = undefined;
      this._name = undefined;
      this._password = undefined;
      this._port = undefined;
      this._region = undefined;
      this._sslCertCheckSum = undefined;
      this._sslCertKey = undefined;
      this._sslCertName = undefined;
      this._sslCertPassword = undefined;
      this._sslEnabled = undefined;
      this._subnetId = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._engineType = value.engineType;
      this._instanceId = value.instanceId;
      this._ip = value.ip;
      this._name = value.name;
      this._password = value.password;
      this._port = value.port;
      this._region = value.region;
      this._sslCertCheckSum = value.sslCertCheckSum;
      this._sslCertKey = value.sslCertKey;
      this._sslCertName = value.sslCertName;
      this._sslCertPassword = value.sslCertPassword;
      this._sslEnabled = value.sslEnabled;
      this._subnetId = value.subnetId;
      this._user = value.user;
    }
  }

  // engine_type - computed: false, optional: false, required: true
  private _engineType?: string; 
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }
  public set engineType(value: string) {
    this._engineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineTypeInput() {
    return this._engineType;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // ssl_cert_check_sum - computed: false, optional: true, required: false
  private _sslCertCheckSum?: string; 
  public get sslCertCheckSum() {
    return this.getStringAttribute('ssl_cert_check_sum');
  }
  public set sslCertCheckSum(value: string) {
    this._sslCertCheckSum = value;
  }
  public resetSslCertCheckSum() {
    this._sslCertCheckSum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertCheckSumInput() {
    return this._sslCertCheckSum;
  }

  // ssl_cert_key - computed: false, optional: true, required: false
  private _sslCertKey?: string; 
  public get sslCertKey() {
    return this.getStringAttribute('ssl_cert_key');
  }
  public set sslCertKey(value: string) {
    this._sslCertKey = value;
  }
  public resetSslCertKey() {
    this._sslCertKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertKeyInput() {
    return this._sslCertKey;
  }

  // ssl_cert_name - computed: false, optional: true, required: false
  private _sslCertName?: string; 
  public get sslCertName() {
    return this.getStringAttribute('ssl_cert_name');
  }
  public set sslCertName(value: string) {
    this._sslCertName = value;
  }
  public resetSslCertName() {
    this._sslCertName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertNameInput() {
    return this._sslCertName;
  }

  // ssl_cert_password - computed: false, optional: true, required: false
  private _sslCertPassword?: string; 
  public get sslCertPassword() {
    return this.getStringAttribute('ssl_cert_password');
  }
  public set sslCertPassword(value: string) {
    this._sslCertPassword = value;
  }
  public resetSslCertPassword() {
    this._sslCertPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertPasswordInput() {
    return this._sslCertPassword;
  }

  // ssl_enabled - computed: false, optional: true, required: false
  private _sslEnabled?: boolean | cdktf.IResolvable; 
  public get sslEnabled() {
    return this.getBooleanAttribute('ssl_enabled');
  }
  public set sslEnabled(value: boolean | cdktf.IResolvable) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DrsTaskV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#create DrsTaskV3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#delete DrsTaskV3#delete}
  */
  readonly delete?: string;
}

export function drsTaskV3TimeoutsToTerraform(struct?: DrsTaskV3Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function drsTaskV3TimeoutsToHclTerraform(struct?: DrsTaskV3Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DrsTaskV3TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DrsTaskV3Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DrsTaskV3Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3 opentelekomcloud_drs_task_v3}
*/
export class DrsTaskV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_drs_task_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DrsTaskV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DrsTaskV3 to import
  * @param importFromId The id of the existing DrsTaskV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DrsTaskV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_drs_task_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/drs_task_v3 opentelekomcloud_drs_task_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DrsTaskV3Config
  */
  public constructor(scope: Construct, id: string, config: DrsTaskV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_drs_task_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.45',
        providerVersionConstraint: '~> 1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._destinationDbReadonly = config.destinationDbReadonly;
    this._direction = config.direction;
    this._engineType = config.engineType;
    this._expiredDays = config.expiredDays;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._migrateDefiner = config.migrateDefiner;
    this._migrationType = config.migrationType;
    this._multiWrite = config.multiWrite;
    this._name = config.name;
    this._netType = config.netType;
    this._nodeNum = config.nodeNum;
    this._startTime = config.startTime;
    this._tags = config.tags;
    this._type = config.type;
    this._destinationDb.internalValue = config.destinationDb;
    this._limitSpeed.internalValue = config.limitSpeed;
    this._sourceDb.internalValue = config.sourceDb;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // destination_db_readonly - computed: false, optional: true, required: false
  private _destinationDbReadonly?: boolean | cdktf.IResolvable; 
  public get destinationDbReadonly() {
    return this.getBooleanAttribute('destination_db_readonly');
  }
  public set destinationDbReadonly(value: boolean | cdktf.IResolvable) {
    this._destinationDbReadonly = value;
  }
  public resetDestinationDbReadonly() {
    this._destinationDbReadonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDbReadonlyInput() {
    return this._destinationDbReadonly;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // engine_type - computed: false, optional: false, required: true
  private _engineType?: string; 
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }
  public set engineType(value: string) {
    this._engineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineTypeInput() {
    return this._engineType;
  }

  // expired_days - computed: false, optional: true, required: false
  private _expiredDays?: number; 
  public get expiredDays() {
    return this.getNumberAttribute('expired_days');
  }
  public set expiredDays(value: number) {
    this._expiredDays = value;
  }
  public resetExpiredDays() {
    this._expiredDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredDaysInput() {
    return this._expiredDays;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // migrate_definer - computed: false, optional: true, required: false
  private _migrateDefiner?: boolean | cdktf.IResolvable; 
  public get migrateDefiner() {
    return this.getBooleanAttribute('migrate_definer');
  }
  public set migrateDefiner(value: boolean | cdktf.IResolvable) {
    this._migrateDefiner = value;
  }
  public resetMigrateDefiner() {
    this._migrateDefiner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrateDefinerInput() {
    return this._migrateDefiner;
  }

  // migration_type - computed: false, optional: true, required: false
  private _migrationType?: string; 
  public get migrationType() {
    return this.getStringAttribute('migration_type');
  }
  public set migrationType(value: string) {
    this._migrationType = value;
  }
  public resetMigrationType() {
    this._migrationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationTypeInput() {
    return this._migrationType;
  }

  // multi_write - computed: false, optional: true, required: false
  private _multiWrite?: boolean | cdktf.IResolvable; 
  public get multiWrite() {
    return this.getBooleanAttribute('multi_write');
  }
  public set multiWrite(value: boolean | cdktf.IResolvable) {
    this._multiWrite = value;
  }
  public resetMultiWrite() {
    this._multiWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiWriteInput() {
    return this._multiWrite;
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

  // net_type - computed: false, optional: true, required: false
  private _netType?: string; 
  public get netType() {
    return this.getStringAttribute('net_type');
  }
  public set netType(value: string) {
    this._netType = value;
  }
  public resetNetType() {
    this._netType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netTypeInput() {
    return this._netType;
  }

  // node_num - computed: false, optional: true, required: false
  private _nodeNum?: number; 
  public get nodeNum() {
    return this.getNumberAttribute('node_num');
  }
  public set nodeNum(value: number) {
    this._nodeNum = value;
  }
  public resetNodeNum() {
    this._nodeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNumInput() {
    return this._nodeNum;
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // destination_db - computed: false, optional: false, required: true
  private _destinationDb = new DrsTaskV3DestinationDbOutputReference(this, "destination_db");
  public get destinationDb() {
    return this._destinationDb;
  }
  public putDestinationDb(value: DrsTaskV3DestinationDb) {
    this._destinationDb.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDbInput() {
    return this._destinationDb.internalValue;
  }

  // limit_speed - computed: false, optional: true, required: false
  private _limitSpeed = new DrsTaskV3LimitSpeedList(this, "limit_speed", false);
  public get limitSpeed() {
    return this._limitSpeed;
  }
  public putLimitSpeed(value: DrsTaskV3LimitSpeed[] | cdktf.IResolvable) {
    this._limitSpeed.internalValue = value;
  }
  public resetLimitSpeed() {
    this._limitSpeed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitSpeedInput() {
    return this._limitSpeed.internalValue;
  }

  // source_db - computed: false, optional: false, required: true
  private _sourceDb = new DrsTaskV3SourceDbOutputReference(this, "source_db");
  public get sourceDb() {
    return this._sourceDb;
  }
  public putSourceDb(value: DrsTaskV3SourceDb) {
    this._sourceDb.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDbInput() {
    return this._sourceDb.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DrsTaskV3TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DrsTaskV3Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      destination_db_readonly: cdktf.booleanToTerraform(this._destinationDbReadonly),
      direction: cdktf.stringToTerraform(this._direction),
      engine_type: cdktf.stringToTerraform(this._engineType),
      expired_days: cdktf.numberToTerraform(this._expiredDays),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      id: cdktf.stringToTerraform(this._id),
      migrate_definer: cdktf.booleanToTerraform(this._migrateDefiner),
      migration_type: cdktf.stringToTerraform(this._migrationType),
      multi_write: cdktf.booleanToTerraform(this._multiWrite),
      name: cdktf.stringToTerraform(this._name),
      net_type: cdktf.stringToTerraform(this._netType),
      node_num: cdktf.numberToTerraform(this._nodeNum),
      start_time: cdktf.stringToTerraform(this._startTime),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      destination_db: drsTaskV3DestinationDbToTerraform(this._destinationDb.internalValue),
      limit_speed: cdktf.listMapper(drsTaskV3LimitSpeedToTerraform, true)(this._limitSpeed.internalValue),
      source_db: drsTaskV3SourceDbToTerraform(this._sourceDb.internalValue),
      timeouts: drsTaskV3TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_db_readonly: {
        value: cdktf.booleanToHclTerraform(this._destinationDbReadonly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_type: {
        value: cdktf.stringToHclTerraform(this._engineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expired_days: {
        value: cdktf.numberToHclTerraform(this._expiredDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_destroy: {
        value: cdktf.booleanToHclTerraform(this._forceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migrate_definer: {
        value: cdktf.booleanToHclTerraform(this._migrateDefiner),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      migration_type: {
        value: cdktf.stringToHclTerraform(this._migrationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_write: {
        value: cdktf.booleanToHclTerraform(this._multiWrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net_type: {
        value: cdktf.stringToHclTerraform(this._netType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_num: {
        value: cdktf.numberToHclTerraform(this._nodeNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_db: {
        value: drsTaskV3DestinationDbToHclTerraform(this._destinationDb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DrsTaskV3DestinationDbList",
      },
      limit_speed: {
        value: cdktf.listMapperHcl(drsTaskV3LimitSpeedToHclTerraform, true)(this._limitSpeed.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DrsTaskV3LimitSpeedList",
      },
      source_db: {
        value: drsTaskV3SourceDbToHclTerraform(this._sourceDb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DrsTaskV3SourceDbList",
      },
      timeouts: {
        value: drsTaskV3TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DrsTaskV3Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
