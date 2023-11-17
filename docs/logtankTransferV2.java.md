# `opentelekomcloud_logtank_transfer_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_logtank_transfer_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2).

# `logtankTransferV2` Submodule <a name="`logtankTransferV2` Submodule" id="@cdktf/provider-opentelekomcloud.logtankTransferV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogtankTransferV2 <a name="LogtankTransferV2" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2 opentelekomcloud_logtank_transfer_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.logtank_transfer_v2.LogtankTransferV2;

LogtankTransferV2.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .logGroupId(java.lang.String)
    .logStreamIds(java.util.List<java.lang.String>)
    .obsBucketName(java.lang.String)
    .period(java.lang.Number)
    .periodUnit(java.lang.String)
    .storageFormat(java.lang.String)
//  .dirPrefixName(java.lang.String)
//  .id(java.lang.String)
//  .prefixName(java.lang.String)
//  .switchOn(java.lang.Boolean)
//  .switchOn(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#log_group_id LogtankTransferV2#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.logStreamIds">logStreamIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#log_stream_ids LogtankTransferV2#log_stream_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.obsBucketName">obsBucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#obs_bucket_name LogtankTransferV2#obs_bucket_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.period">period</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#period LogtankTransferV2#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.periodUnit">periodUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#period_unit LogtankTransferV2#period_unit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.storageFormat">storageFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#storage_format LogtankTransferV2#storage_format}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.dirPrefixName">dirPrefixName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#dir_prefix_name LogtankTransferV2#dir_prefix_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#id LogtankTransferV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.prefixName">prefixName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#prefix_name LogtankTransferV2#prefix_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.switchOn">switchOn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#switch_on LogtankTransferV2#switch_on}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.logGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#log_group_id LogtankTransferV2#log_group_id}.

---

##### `logStreamIds`<sup>Required</sup> <a name="logStreamIds" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.logStreamIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#log_stream_ids LogtankTransferV2#log_stream_ids}.

---

##### `obsBucketName`<sup>Required</sup> <a name="obsBucketName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.obsBucketName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#obs_bucket_name LogtankTransferV2#obs_bucket_name}.

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.period"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#period LogtankTransferV2#period}.

---

##### `periodUnit`<sup>Required</sup> <a name="periodUnit" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.periodUnit"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#period_unit LogtankTransferV2#period_unit}.

---

##### `storageFormat`<sup>Required</sup> <a name="storageFormat" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.storageFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#storage_format LogtankTransferV2#storage_format}.

---

##### `dirPrefixName`<sup>Optional</sup> <a name="dirPrefixName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.dirPrefixName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#dir_prefix_name LogtankTransferV2#dir_prefix_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#id LogtankTransferV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `prefixName`<sup>Optional</sup> <a name="prefixName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.prefixName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#prefix_name LogtankTransferV2#prefix_name}.

---

##### `switchOn`<sup>Optional</sup> <a name="switchOn" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.Initializer.parameter.switchOn"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#switch_on LogtankTransferV2#switch_on}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetDirPrefixName">resetDirPrefixName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetPrefixName">resetPrefixName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetSwitchOn">resetSwitchOn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetDirPrefixName` <a name="resetDirPrefixName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetDirPrefixName"></a>

```java
public void resetDirPrefixName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetId"></a>

```java
public void resetId()
```

##### `resetPrefixName` <a name="resetPrefixName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetPrefixName"></a>

```java
public void resetPrefixName()
```

##### `resetSwitchOn` <a name="resetSwitchOn" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.resetSwitchOn"></a>

```java
public void resetSwitchOn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LogtankTransferV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.logtank_transfer_v2.LogtankTransferV2;

LogtankTransferV2.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.logtank_transfer_v2.LogtankTransferV2;

LogtankTransferV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.logtank_transfer_v2.LogtankTransferV2;

LogtankTransferV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.logtank_transfer_v2.LogtankTransferV2;

LogtankTransferV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LogtankTransferV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LogtankTransferV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LogtankTransferV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LogtankTransferV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LogtankTransferV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.createTime">createTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logTransferMode">logTransferMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logTransferType">logTransferType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsEncryptionEnable">obsEncryptionEnable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsEncryptionId">obsEncryptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.dirPrefixNameInput">dirPrefixNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logGroupIdInput">logGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logStreamIdsInput">logStreamIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsBucketNameInput">obsBucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.periodInput">periodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.periodUnitInput">periodUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.prefixNameInput">prefixNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.storageFormatInput">storageFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.switchOnInput">switchOnInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.dirPrefixName">dirPrefixName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logStreamIds">logStreamIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsBucketName">obsBucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.periodUnit">periodUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.prefixName">prefixName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.storageFormat">storageFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.switchOn">switchOn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.createTime"></a>

```java
public java.lang.Number getCreateTime();
```

- *Type:* java.lang.Number

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

---

##### `logTransferMode`<sup>Required</sup> <a name="logTransferMode" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logTransferMode"></a>

```java
public java.lang.String getLogTransferMode();
```

- *Type:* java.lang.String

---

##### `logTransferType`<sup>Required</sup> <a name="logTransferType" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logTransferType"></a>

```java
public java.lang.String getLogTransferType();
```

- *Type:* java.lang.String

---

##### `obsEncryptionEnable`<sup>Required</sup> <a name="obsEncryptionEnable" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsEncryptionEnable"></a>

```java
public IResolvable getObsEncryptionEnable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `obsEncryptionId`<sup>Required</sup> <a name="obsEncryptionId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsEncryptionId"></a>

```java
public java.lang.String getObsEncryptionId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `dirPrefixNameInput`<sup>Optional</sup> <a name="dirPrefixNameInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.dirPrefixNameInput"></a>

```java
public java.lang.String getDirPrefixNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logGroupIdInput`<sup>Optional</sup> <a name="logGroupIdInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logGroupIdInput"></a>

```java
public java.lang.String getLogGroupIdInput();
```

- *Type:* java.lang.String

---

##### `logStreamIdsInput`<sup>Optional</sup> <a name="logStreamIdsInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logStreamIdsInput"></a>

```java
public java.util.List<java.lang.String> getLogStreamIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `obsBucketNameInput`<sup>Optional</sup> <a name="obsBucketNameInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsBucketNameInput"></a>

```java
public java.lang.String getObsBucketNameInput();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.periodInput"></a>

```java
public java.lang.Number getPeriodInput();
```

- *Type:* java.lang.Number

---

##### `periodUnitInput`<sup>Optional</sup> <a name="periodUnitInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.periodUnitInput"></a>

```java
public java.lang.String getPeriodUnitInput();
```

- *Type:* java.lang.String

---

##### `prefixNameInput`<sup>Optional</sup> <a name="prefixNameInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.prefixNameInput"></a>

```java
public java.lang.String getPrefixNameInput();
```

- *Type:* java.lang.String

---

##### `storageFormatInput`<sup>Optional</sup> <a name="storageFormatInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.storageFormatInput"></a>

```java
public java.lang.String getStorageFormatInput();
```

- *Type:* java.lang.String

---

##### `switchOnInput`<sup>Optional</sup> <a name="switchOnInput" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.switchOnInput"></a>

```java
public java.lang.Object getSwitchOnInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dirPrefixName`<sup>Required</sup> <a name="dirPrefixName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.dirPrefixName"></a>

```java
public java.lang.String getDirPrefixName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logGroupId"></a>

```java
public java.lang.String getLogGroupId();
```

- *Type:* java.lang.String

---

##### `logStreamIds`<sup>Required</sup> <a name="logStreamIds" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.logStreamIds"></a>

```java
public java.util.List<java.lang.String> getLogStreamIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `obsBucketName`<sup>Required</sup> <a name="obsBucketName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.obsBucketName"></a>

```java
public java.lang.String getObsBucketName();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `periodUnit`<sup>Required</sup> <a name="periodUnit" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.periodUnit"></a>

```java
public java.lang.String getPeriodUnit();
```

- *Type:* java.lang.String

---

##### `prefixName`<sup>Required</sup> <a name="prefixName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.prefixName"></a>

```java
public java.lang.String getPrefixName();
```

- *Type:* java.lang.String

---

##### `storageFormat`<sup>Required</sup> <a name="storageFormat" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.storageFormat"></a>

```java
public java.lang.String getStorageFormat();
```

- *Type:* java.lang.String

---

##### `switchOn`<sup>Required</sup> <a name="switchOn" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.switchOn"></a>

```java
public java.lang.Object getSwitchOn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LogtankTransferV2Config <a name="LogtankTransferV2Config" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.logtank_transfer_v2.LogtankTransferV2Config;

LogtankTransferV2Config.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .logGroupId(java.lang.String)
    .logStreamIds(java.util.List<java.lang.String>)
    .obsBucketName(java.lang.String)
    .period(java.lang.Number)
    .periodUnit(java.lang.String)
    .storageFormat(java.lang.String)
//  .dirPrefixName(java.lang.String)
//  .id(java.lang.String)
//  .prefixName(java.lang.String)
//  .switchOn(java.lang.Boolean)
//  .switchOn(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#log_group_id LogtankTransferV2#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.logStreamIds">logStreamIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#log_stream_ids LogtankTransferV2#log_stream_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.obsBucketName">obsBucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#obs_bucket_name LogtankTransferV2#obs_bucket_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.period">period</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#period LogtankTransferV2#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.periodUnit">periodUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#period_unit LogtankTransferV2#period_unit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.storageFormat">storageFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#storage_format LogtankTransferV2#storage_format}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.dirPrefixName">dirPrefixName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#dir_prefix_name LogtankTransferV2#dir_prefix_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#id LogtankTransferV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.prefixName">prefixName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#prefix_name LogtankTransferV2#prefix_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.switchOn">switchOn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#switch_on LogtankTransferV2#switch_on}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.logGroupId"></a>

```java
public java.lang.String getLogGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#log_group_id LogtankTransferV2#log_group_id}.

---

##### `logStreamIds`<sup>Required</sup> <a name="logStreamIds" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.logStreamIds"></a>

```java
public java.util.List<java.lang.String> getLogStreamIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#log_stream_ids LogtankTransferV2#log_stream_ids}.

---

##### `obsBucketName`<sup>Required</sup> <a name="obsBucketName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.obsBucketName"></a>

```java
public java.lang.String getObsBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#obs_bucket_name LogtankTransferV2#obs_bucket_name}.

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#period LogtankTransferV2#period}.

---

##### `periodUnit`<sup>Required</sup> <a name="periodUnit" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.periodUnit"></a>

```java
public java.lang.String getPeriodUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#period_unit LogtankTransferV2#period_unit}.

---

##### `storageFormat`<sup>Required</sup> <a name="storageFormat" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.storageFormat"></a>

```java
public java.lang.String getStorageFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#storage_format LogtankTransferV2#storage_format}.

---

##### `dirPrefixName`<sup>Optional</sup> <a name="dirPrefixName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.dirPrefixName"></a>

```java
public java.lang.String getDirPrefixName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#dir_prefix_name LogtankTransferV2#dir_prefix_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#id LogtankTransferV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `prefixName`<sup>Optional</sup> <a name="prefixName" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.prefixName"></a>

```java
public java.lang.String getPrefixName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#prefix_name LogtankTransferV2#prefix_name}.

---

##### `switchOn`<sup>Optional</sup> <a name="switchOn" id="@cdktf/provider-opentelekomcloud.logtankTransferV2.LogtankTransferV2Config.property.switchOn"></a>

```java
public java.lang.Object getSwitchOn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/logtank_transfer_v2#switch_on LogtankTransferV2#switch_on}.

---



