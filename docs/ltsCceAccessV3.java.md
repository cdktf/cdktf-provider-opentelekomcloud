# `ltsCceAccessV3` Submodule <a name="`ltsCceAccessV3` Submodule" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LtsCceAccessV3 <a name="LtsCceAccessV3" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3 opentelekomcloud_lts_cce_access_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_cce_access_v3.LtsCceAccessV3;

LtsCceAccessV3.Builder.create(Construct scope, java.lang.String id)
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
    .accessConfig(LtsCceAccessV3AccessConfig)
    .clusterId(java.lang.String)
    .logGroupId(java.lang.String)
    .logStreamId(java.lang.String)
    .name(java.lang.String)
//  .binaryCollect(java.lang.Boolean)
//  .binaryCollect(IResolvable)
//  .hostGroupIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .logSplit(java.lang.Boolean)
//  .logSplit(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig">LtsCceAccessV3AccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#cluster_id LtsCceAccessV3#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#log_group_id LtsCceAccessV3#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.logStreamId">logStreamId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#log_stream_id LtsCceAccessV3#log_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#name LtsCceAccessV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.binaryCollect">binaryCollect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#binary_collect LtsCceAccessV3#binary_collect}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.hostGroupIds">hostGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#host_group_ids LtsCceAccessV3#host_group_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#id LtsCceAccessV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.logSplit">logSplit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#log_split LtsCceAccessV3#log_split}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#tags LtsCceAccessV3#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.accessConfig"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig">LtsCceAccessV3AccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#access_config LtsCceAccessV3#access_config}

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#cluster_id LtsCceAccessV3#cluster_id}.

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.logGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#log_group_id LtsCceAccessV3#log_group_id}.

---

##### `logStreamId`<sup>Required</sup> <a name="logStreamId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.logStreamId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#log_stream_id LtsCceAccessV3#log_stream_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#name LtsCceAccessV3#name}.

---

##### `binaryCollect`<sup>Optional</sup> <a name="binaryCollect" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.binaryCollect"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#binary_collect LtsCceAccessV3#binary_collect}.

---

##### `hostGroupIds`<sup>Optional</sup> <a name="hostGroupIds" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.hostGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#host_group_ids LtsCceAccessV3#host_group_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#id LtsCceAccessV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logSplit`<sup>Optional</sup> <a name="logSplit" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.logSplit"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#log_split LtsCceAccessV3#log_split}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#tags LtsCceAccessV3#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.putAccessConfig">putAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetBinaryCollect">resetBinaryCollect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetHostGroupIds">resetHostGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetLogSplit">resetLogSplit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessConfig` <a name="putAccessConfig" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.putAccessConfig"></a>

```java
public void putAccessConfig(LtsCceAccessV3AccessConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.putAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig">LtsCceAccessV3AccessConfig</a>

---

##### `resetBinaryCollect` <a name="resetBinaryCollect" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetBinaryCollect"></a>

```java
public void resetBinaryCollect()
```

##### `resetHostGroupIds` <a name="resetHostGroupIds" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetHostGroupIds"></a>

```java
public void resetHostGroupIds()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetId"></a>

```java
public void resetId()
```

##### `resetLogSplit` <a name="resetLogSplit" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetLogSplit"></a>

```java
public void resetLogSplit()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LtsCceAccessV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_cce_access_v3.LtsCceAccessV3;

LtsCceAccessV3.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_cce_access_v3.LtsCceAccessV3;

LtsCceAccessV3.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_cce_access_v3.LtsCceAccessV3;

LtsCceAccessV3.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_cce_access_v3.LtsCceAccessV3;

LtsCceAccessV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LtsCceAccessV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LtsCceAccessV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LtsCceAccessV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LtsCceAccessV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LtsCceAccessV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference">LtsCceAccessV3AccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.accessType">accessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logStreamName">logStreamName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.accessConfigInput">accessConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig">LtsCceAccessV3AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.binaryCollectInput">binaryCollectInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.hostGroupIdsInput">hostGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logGroupIdInput">logGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logSplitInput">logSplitInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logStreamIdInput">logStreamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.binaryCollect">binaryCollect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.hostGroupIds">hostGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logSplit">logSplit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logStreamId">logStreamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.accessConfig"></a>

```java
public LtsCceAccessV3AccessConfigOutputReference getAccessConfig();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference">LtsCceAccessV3AccessConfigOutputReference</a>

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.accessType"></a>

```java
public java.lang.String getAccessType();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

---

##### `logStreamName`<sup>Required</sup> <a name="logStreamName" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logStreamName"></a>

```java
public java.lang.String getLogStreamName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `accessConfigInput`<sup>Optional</sup> <a name="accessConfigInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.accessConfigInput"></a>

```java
public LtsCceAccessV3AccessConfig getAccessConfigInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig">LtsCceAccessV3AccessConfig</a>

---

##### `binaryCollectInput`<sup>Optional</sup> <a name="binaryCollectInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.binaryCollectInput"></a>

```java
public java.lang.Object getBinaryCollectInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `hostGroupIdsInput`<sup>Optional</sup> <a name="hostGroupIdsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.hostGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getHostGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logGroupIdInput`<sup>Optional</sup> <a name="logGroupIdInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logGroupIdInput"></a>

```java
public java.lang.String getLogGroupIdInput();
```

- *Type:* java.lang.String

---

##### `logSplitInput`<sup>Optional</sup> <a name="logSplitInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logSplitInput"></a>

```java
public java.lang.Object getLogSplitInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logStreamIdInput`<sup>Optional</sup> <a name="logStreamIdInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logStreamIdInput"></a>

```java
public java.lang.String getLogStreamIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `binaryCollect`<sup>Required</sup> <a name="binaryCollect" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.binaryCollect"></a>

```java
public java.lang.Object getBinaryCollect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `hostGroupIds`<sup>Required</sup> <a name="hostGroupIds" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.hostGroupIds"></a>

```java
public java.util.List<java.lang.String> getHostGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logGroupId"></a>

```java
public java.lang.String getLogGroupId();
```

- *Type:* java.lang.String

---

##### `logSplit`<sup>Required</sup> <a name="logSplit" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logSplit"></a>

```java
public java.lang.Object getLogSplit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logStreamId`<sup>Required</sup> <a name="logStreamId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.logStreamId"></a>

```java
public java.lang.String getLogStreamId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LtsCceAccessV3AccessConfig <a name="LtsCceAccessV3AccessConfig" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_cce_access_v3.LtsCceAccessV3AccessConfig;

LtsCceAccessV3AccessConfig.builder()
    .pathType(java.lang.String)
//  .blackPaths(java.util.List<java.lang.String>)
//  .containerNameRegex(java.lang.String)
//  .excludeEnvs(java.util.Map<java.lang.String, java.lang.String>)
//  .excludeK8SLabels(java.util.Map<java.lang.String, java.lang.String>)
//  .excludeLabels(java.util.Map<java.lang.String, java.lang.String>)
//  .includeEnvs(java.util.Map<java.lang.String, java.lang.String>)
//  .includeK8SLabels(java.util.Map<java.lang.String, java.lang.String>)
//  .includeLabels(java.util.Map<java.lang.String, java.lang.String>)
//  .logEnvs(java.util.Map<java.lang.String, java.lang.String>)
//  .logK8S(java.util.Map<java.lang.String, java.lang.String>)
//  .logLabels(java.util.Map<java.lang.String, java.lang.String>)
//  .multiLogFormat(LtsCceAccessV3AccessConfigMultiLogFormat)
//  .nameSpaceRegex(java.lang.String)
//  .paths(java.util.List<java.lang.String>)
//  .podNameRegex(java.lang.String)
//  .singleLogFormat(LtsCceAccessV3AccessConfigSingleLogFormat)
//  .stderr(java.lang.Boolean)
//  .stderr(IResolvable)
//  .stdout(java.lang.Boolean)
//  .stdout(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.pathType">pathType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#path_type LtsCceAccessV3#path_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.blackPaths">blackPaths</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#black_paths LtsCceAccessV3#black_paths}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.containerNameRegex">containerNameRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#container_name_regex LtsCceAccessV3#container_name_regex}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.excludeEnvs">excludeEnvs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#exclude_envs LtsCceAccessV3#exclude_envs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.excludeK8SLabels">excludeK8SLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#exclude_k8s_labels LtsCceAccessV3#exclude_k8s_labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.excludeLabels">excludeLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#exclude_labels LtsCceAccessV3#exclude_labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.includeEnvs">includeEnvs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#include_envs LtsCceAccessV3#include_envs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.includeK8SLabels">includeK8SLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#include_k8s_labels LtsCceAccessV3#include_k8s_labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.includeLabels">includeLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#include_labels LtsCceAccessV3#include_labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.logEnvs">logEnvs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#log_envs LtsCceAccessV3#log_envs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.logK8S">logK8S</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#log_k8s LtsCceAccessV3#log_k8s}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.logLabels">logLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#log_labels LtsCceAccessV3#log_labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.multiLogFormat">multiLogFormat</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat">LtsCceAccessV3AccessConfigMultiLogFormat</a></code> | multi_log_format block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.nameSpaceRegex">nameSpaceRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#name_space_regex LtsCceAccessV3#name_space_regex}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.paths">paths</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#paths LtsCceAccessV3#paths}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.podNameRegex">podNameRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#pod_name_regex LtsCceAccessV3#pod_name_regex}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.singleLogFormat">singleLogFormat</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat">LtsCceAccessV3AccessConfigSingleLogFormat</a></code> | single_log_format block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.stderr">stderr</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#stderr LtsCceAccessV3#stderr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.stdout">stdout</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#stdout LtsCceAccessV3#stdout}. |

---

##### `pathType`<sup>Required</sup> <a name="pathType" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.pathType"></a>

```java
public java.lang.String getPathType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#path_type LtsCceAccessV3#path_type}.

---

##### `blackPaths`<sup>Optional</sup> <a name="blackPaths" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.blackPaths"></a>

```java
public java.util.List<java.lang.String> getBlackPaths();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#black_paths LtsCceAccessV3#black_paths}.

---

##### `containerNameRegex`<sup>Optional</sup> <a name="containerNameRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.containerNameRegex"></a>

```java
public java.lang.String getContainerNameRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#container_name_regex LtsCceAccessV3#container_name_regex}.

---

##### `excludeEnvs`<sup>Optional</sup> <a name="excludeEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.excludeEnvs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExcludeEnvs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#exclude_envs LtsCceAccessV3#exclude_envs}.

---

##### `excludeK8SLabels`<sup>Optional</sup> <a name="excludeK8SLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.excludeK8SLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExcludeK8SLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#exclude_k8s_labels LtsCceAccessV3#exclude_k8s_labels}.

---

##### `excludeLabels`<sup>Optional</sup> <a name="excludeLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.excludeLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExcludeLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#exclude_labels LtsCceAccessV3#exclude_labels}.

---

##### `includeEnvs`<sup>Optional</sup> <a name="includeEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.includeEnvs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getIncludeEnvs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#include_envs LtsCceAccessV3#include_envs}.

---

##### `includeK8SLabels`<sup>Optional</sup> <a name="includeK8SLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.includeK8SLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getIncludeK8SLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#include_k8s_labels LtsCceAccessV3#include_k8s_labels}.

---

##### `includeLabels`<sup>Optional</sup> <a name="includeLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.includeLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getIncludeLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#include_labels LtsCceAccessV3#include_labels}.

---

##### `logEnvs`<sup>Optional</sup> <a name="logEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.logEnvs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLogEnvs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#log_envs LtsCceAccessV3#log_envs}.

---

##### `logK8S`<sup>Optional</sup> <a name="logK8S" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.logK8S"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLogK8S();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#log_k8s LtsCceAccessV3#log_k8s}.

---

##### `logLabels`<sup>Optional</sup> <a name="logLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.logLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLogLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#log_labels LtsCceAccessV3#log_labels}.

---

##### `multiLogFormat`<sup>Optional</sup> <a name="multiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.multiLogFormat"></a>

```java
public LtsCceAccessV3AccessConfigMultiLogFormat getMultiLogFormat();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat">LtsCceAccessV3AccessConfigMultiLogFormat</a>

multi_log_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#multi_log_format LtsCceAccessV3#multi_log_format}

---

##### `nameSpaceRegex`<sup>Optional</sup> <a name="nameSpaceRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.nameSpaceRegex"></a>

```java
public java.lang.String getNameSpaceRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#name_space_regex LtsCceAccessV3#name_space_regex}.

---

##### `paths`<sup>Optional</sup> <a name="paths" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.paths"></a>

```java
public java.util.List<java.lang.String> getPaths();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#paths LtsCceAccessV3#paths}.

---

##### `podNameRegex`<sup>Optional</sup> <a name="podNameRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.podNameRegex"></a>

```java
public java.lang.String getPodNameRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#pod_name_regex LtsCceAccessV3#pod_name_regex}.

---

##### `singleLogFormat`<sup>Optional</sup> <a name="singleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.singleLogFormat"></a>

```java
public LtsCceAccessV3AccessConfigSingleLogFormat getSingleLogFormat();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat">LtsCceAccessV3AccessConfigSingleLogFormat</a>

single_log_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#single_log_format LtsCceAccessV3#single_log_format}

---

##### `stderr`<sup>Optional</sup> <a name="stderr" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.stderr"></a>

```java
public java.lang.Object getStderr();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#stderr LtsCceAccessV3#stderr}.

---

##### `stdout`<sup>Optional</sup> <a name="stdout" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig.property.stdout"></a>

```java
public java.lang.Object getStdout();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#stdout LtsCceAccessV3#stdout}.

---

### LtsCceAccessV3AccessConfigMultiLogFormat <a name="LtsCceAccessV3AccessConfigMultiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_cce_access_v3.LtsCceAccessV3AccessConfigMultiLogFormat;

LtsCceAccessV3AccessConfigMultiLogFormat.builder()
    .mode(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#mode LtsCceAccessV3#mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#value LtsCceAccessV3#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#mode LtsCceAccessV3#mode}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#value LtsCceAccessV3#value}.

---

### LtsCceAccessV3AccessConfigSingleLogFormat <a name="LtsCceAccessV3AccessConfigSingleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_cce_access_v3.LtsCceAccessV3AccessConfigSingleLogFormat;

LtsCceAccessV3AccessConfigSingleLogFormat.builder()
    .mode(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#mode LtsCceAccessV3#mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#value LtsCceAccessV3#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#mode LtsCceAccessV3#mode}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#value LtsCceAccessV3#value}.

---

### LtsCceAccessV3Config <a name="LtsCceAccessV3Config" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_cce_access_v3.LtsCceAccessV3Config;

LtsCceAccessV3Config.builder()
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
    .accessConfig(LtsCceAccessV3AccessConfig)
    .clusterId(java.lang.String)
    .logGroupId(java.lang.String)
    .logStreamId(java.lang.String)
    .name(java.lang.String)
//  .binaryCollect(java.lang.Boolean)
//  .binaryCollect(IResolvable)
//  .hostGroupIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .logSplit(java.lang.Boolean)
//  .logSplit(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig">LtsCceAccessV3AccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#cluster_id LtsCceAccessV3#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#log_group_id LtsCceAccessV3#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.logStreamId">logStreamId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#log_stream_id LtsCceAccessV3#log_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#name LtsCceAccessV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.binaryCollect">binaryCollect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#binary_collect LtsCceAccessV3#binary_collect}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.hostGroupIds">hostGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#host_group_ids LtsCceAccessV3#host_group_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#id LtsCceAccessV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.logSplit">logSplit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#log_split LtsCceAccessV3#log_split}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#tags LtsCceAccessV3#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.accessConfig"></a>

```java
public LtsCceAccessV3AccessConfig getAccessConfig();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig">LtsCceAccessV3AccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#access_config LtsCceAccessV3#access_config}

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#cluster_id LtsCceAccessV3#cluster_id}.

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.logGroupId"></a>

```java
public java.lang.String getLogGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#log_group_id LtsCceAccessV3#log_group_id}.

---

##### `logStreamId`<sup>Required</sup> <a name="logStreamId" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.logStreamId"></a>

```java
public java.lang.String getLogStreamId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#log_stream_id LtsCceAccessV3#log_stream_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#name LtsCceAccessV3#name}.

---

##### `binaryCollect`<sup>Optional</sup> <a name="binaryCollect" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.binaryCollect"></a>

```java
public java.lang.Object getBinaryCollect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#binary_collect LtsCceAccessV3#binary_collect}.

---

##### `hostGroupIds`<sup>Optional</sup> <a name="hostGroupIds" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.hostGroupIds"></a>

```java
public java.util.List<java.lang.String> getHostGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#host_group_ids LtsCceAccessV3#host_group_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#id LtsCceAccessV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logSplit`<sup>Optional</sup> <a name="logSplit" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.logSplit"></a>

```java
public java.lang.Object getLogSplit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#log_split LtsCceAccessV3#log_split}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3Config.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/lts_cce_access_v3#tags LtsCceAccessV3#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### LtsCceAccessV3AccessConfigMultiLogFormatOutputReference <a name="LtsCceAccessV3AccessConfigMultiLogFormatOutputReference" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_cce_access_v3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference;

new LtsCceAccessV3AccessConfigMultiLogFormatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat">LtsCceAccessV3AccessConfigMultiLogFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference.property.internalValue"></a>

```java
public LtsCceAccessV3AccessConfigMultiLogFormat getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat">LtsCceAccessV3AccessConfigMultiLogFormat</a>

---


### LtsCceAccessV3AccessConfigOutputReference <a name="LtsCceAccessV3AccessConfigOutputReference" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_cce_access_v3.LtsCceAccessV3AccessConfigOutputReference;

new LtsCceAccessV3AccessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.putMultiLogFormat">putMultiLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.putSingleLogFormat">putSingleLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetBlackPaths">resetBlackPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetContainerNameRegex">resetContainerNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetExcludeEnvs">resetExcludeEnvs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetExcludeK8SLabels">resetExcludeK8SLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetExcludeLabels">resetExcludeLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetIncludeEnvs">resetIncludeEnvs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetIncludeK8SLabels">resetIncludeK8SLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetIncludeLabels">resetIncludeLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetLogEnvs">resetLogEnvs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetLogK8S">resetLogK8S</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetLogLabels">resetLogLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetMultiLogFormat">resetMultiLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetNameSpaceRegex">resetNameSpaceRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetPaths">resetPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetPodNameRegex">resetPodNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetSingleLogFormat">resetSingleLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetStderr">resetStderr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetStdout">resetStdout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMultiLogFormat` <a name="putMultiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.putMultiLogFormat"></a>

```java
public void putMultiLogFormat(LtsCceAccessV3AccessConfigMultiLogFormat value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.putMultiLogFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat">LtsCceAccessV3AccessConfigMultiLogFormat</a>

---

##### `putSingleLogFormat` <a name="putSingleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.putSingleLogFormat"></a>

```java
public void putSingleLogFormat(LtsCceAccessV3AccessConfigSingleLogFormat value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.putSingleLogFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat">LtsCceAccessV3AccessConfigSingleLogFormat</a>

---

##### `resetBlackPaths` <a name="resetBlackPaths" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetBlackPaths"></a>

```java
public void resetBlackPaths()
```

##### `resetContainerNameRegex` <a name="resetContainerNameRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetContainerNameRegex"></a>

```java
public void resetContainerNameRegex()
```

##### `resetExcludeEnvs` <a name="resetExcludeEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetExcludeEnvs"></a>

```java
public void resetExcludeEnvs()
```

##### `resetExcludeK8SLabels` <a name="resetExcludeK8SLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetExcludeK8SLabels"></a>

```java
public void resetExcludeK8SLabels()
```

##### `resetExcludeLabels` <a name="resetExcludeLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetExcludeLabels"></a>

```java
public void resetExcludeLabels()
```

##### `resetIncludeEnvs` <a name="resetIncludeEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetIncludeEnvs"></a>

```java
public void resetIncludeEnvs()
```

##### `resetIncludeK8SLabels` <a name="resetIncludeK8SLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetIncludeK8SLabels"></a>

```java
public void resetIncludeK8SLabels()
```

##### `resetIncludeLabels` <a name="resetIncludeLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetIncludeLabels"></a>

```java
public void resetIncludeLabels()
```

##### `resetLogEnvs` <a name="resetLogEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetLogEnvs"></a>

```java
public void resetLogEnvs()
```

##### `resetLogK8S` <a name="resetLogK8S" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetLogK8S"></a>

```java
public void resetLogK8S()
```

##### `resetLogLabels` <a name="resetLogLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetLogLabels"></a>

```java
public void resetLogLabels()
```

##### `resetMultiLogFormat` <a name="resetMultiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetMultiLogFormat"></a>

```java
public void resetMultiLogFormat()
```

##### `resetNameSpaceRegex` <a name="resetNameSpaceRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetNameSpaceRegex"></a>

```java
public void resetNameSpaceRegex()
```

##### `resetPaths` <a name="resetPaths" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetPaths"></a>

```java
public void resetPaths()
```

##### `resetPodNameRegex` <a name="resetPodNameRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetPodNameRegex"></a>

```java
public void resetPodNameRegex()
```

##### `resetSingleLogFormat` <a name="resetSingleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetSingleLogFormat"></a>

```java
public void resetSingleLogFormat()
```

##### `resetStderr` <a name="resetStderr" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetStderr"></a>

```java
public void resetStderr()
```

##### `resetStdout` <a name="resetStdout" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.resetStdout"></a>

```java
public void resetStdout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.multiLogFormat">multiLogFormat</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference">LtsCceAccessV3AccessConfigMultiLogFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.singleLogFormat">singleLogFormat</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference">LtsCceAccessV3AccessConfigSingleLogFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.blackPathsInput">blackPathsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.containerNameRegexInput">containerNameRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeEnvsInput">excludeEnvsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeK8SLabelsInput">excludeK8SLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeLabelsInput">excludeLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeEnvsInput">includeEnvsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeK8SLabelsInput">includeK8SLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeLabelsInput">includeLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logEnvsInput">logEnvsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logK8SInput">logK8SInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logLabelsInput">logLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.multiLogFormatInput">multiLogFormatInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat">LtsCceAccessV3AccessConfigMultiLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.nameSpaceRegexInput">nameSpaceRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.pathsInput">pathsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.pathTypeInput">pathTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.podNameRegexInput">podNameRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.singleLogFormatInput">singleLogFormatInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat">LtsCceAccessV3AccessConfigSingleLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.stderrInput">stderrInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.stdoutInput">stdoutInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.blackPaths">blackPaths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.containerNameRegex">containerNameRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeEnvs">excludeEnvs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeK8SLabels">excludeK8SLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeLabels">excludeLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeEnvs">includeEnvs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeK8SLabels">includeK8SLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeLabels">includeLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logEnvs">logEnvs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logK8S">logK8S</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logLabels">logLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.nameSpaceRegex">nameSpaceRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.paths">paths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.pathType">pathType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.podNameRegex">podNameRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.stderr">stderr</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.stdout">stdout</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig">LtsCceAccessV3AccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `multiLogFormat`<sup>Required</sup> <a name="multiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.multiLogFormat"></a>

```java
public LtsCceAccessV3AccessConfigMultiLogFormatOutputReference getMultiLogFormat();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormatOutputReference">LtsCceAccessV3AccessConfigMultiLogFormatOutputReference</a>

---

##### `singleLogFormat`<sup>Required</sup> <a name="singleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.singleLogFormat"></a>

```java
public LtsCceAccessV3AccessConfigSingleLogFormatOutputReference getSingleLogFormat();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference">LtsCceAccessV3AccessConfigSingleLogFormatOutputReference</a>

---

##### `blackPathsInput`<sup>Optional</sup> <a name="blackPathsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.blackPathsInput"></a>

```java
public java.util.List<java.lang.String> getBlackPathsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerNameRegexInput`<sup>Optional</sup> <a name="containerNameRegexInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.containerNameRegexInput"></a>

```java
public java.lang.String getContainerNameRegexInput();
```

- *Type:* java.lang.String

---

##### `excludeEnvsInput`<sup>Optional</sup> <a name="excludeEnvsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeEnvsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExcludeEnvsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `excludeK8SLabelsInput`<sup>Optional</sup> <a name="excludeK8SLabelsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeK8SLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExcludeK8SLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `excludeLabelsInput`<sup>Optional</sup> <a name="excludeLabelsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExcludeLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `includeEnvsInput`<sup>Optional</sup> <a name="includeEnvsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeEnvsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getIncludeEnvsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `includeK8SLabelsInput`<sup>Optional</sup> <a name="includeK8SLabelsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeK8SLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getIncludeK8SLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `includeLabelsInput`<sup>Optional</sup> <a name="includeLabelsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getIncludeLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `logEnvsInput`<sup>Optional</sup> <a name="logEnvsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logEnvsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLogEnvsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `logK8SInput`<sup>Optional</sup> <a name="logK8SInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logK8SInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLogK8SInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `logLabelsInput`<sup>Optional</sup> <a name="logLabelsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLogLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `multiLogFormatInput`<sup>Optional</sup> <a name="multiLogFormatInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.multiLogFormatInput"></a>

```java
public LtsCceAccessV3AccessConfigMultiLogFormat getMultiLogFormatInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigMultiLogFormat">LtsCceAccessV3AccessConfigMultiLogFormat</a>

---

##### `nameSpaceRegexInput`<sup>Optional</sup> <a name="nameSpaceRegexInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.nameSpaceRegexInput"></a>

```java
public java.lang.String getNameSpaceRegexInput();
```

- *Type:* java.lang.String

---

##### `pathsInput`<sup>Optional</sup> <a name="pathsInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.pathsInput"></a>

```java
public java.util.List<java.lang.String> getPathsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pathTypeInput`<sup>Optional</sup> <a name="pathTypeInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.pathTypeInput"></a>

```java
public java.lang.String getPathTypeInput();
```

- *Type:* java.lang.String

---

##### `podNameRegexInput`<sup>Optional</sup> <a name="podNameRegexInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.podNameRegexInput"></a>

```java
public java.lang.String getPodNameRegexInput();
```

- *Type:* java.lang.String

---

##### `singleLogFormatInput`<sup>Optional</sup> <a name="singleLogFormatInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.singleLogFormatInput"></a>

```java
public LtsCceAccessV3AccessConfigSingleLogFormat getSingleLogFormatInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat">LtsCceAccessV3AccessConfigSingleLogFormat</a>

---

##### `stderrInput`<sup>Optional</sup> <a name="stderrInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.stderrInput"></a>

```java
public java.lang.Object getStderrInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stdoutInput`<sup>Optional</sup> <a name="stdoutInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.stdoutInput"></a>

```java
public java.lang.Object getStdoutInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blackPaths`<sup>Required</sup> <a name="blackPaths" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.blackPaths"></a>

```java
public java.util.List<java.lang.String> getBlackPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerNameRegex`<sup>Required</sup> <a name="containerNameRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.containerNameRegex"></a>

```java
public java.lang.String getContainerNameRegex();
```

- *Type:* java.lang.String

---

##### `excludeEnvs`<sup>Required</sup> <a name="excludeEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeEnvs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExcludeEnvs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `excludeK8SLabels`<sup>Required</sup> <a name="excludeK8SLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeK8SLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExcludeK8SLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `excludeLabels`<sup>Required</sup> <a name="excludeLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.excludeLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExcludeLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `includeEnvs`<sup>Required</sup> <a name="includeEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeEnvs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getIncludeEnvs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `includeK8SLabels`<sup>Required</sup> <a name="includeK8SLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeK8SLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getIncludeK8SLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `includeLabels`<sup>Required</sup> <a name="includeLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.includeLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getIncludeLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `logEnvs`<sup>Required</sup> <a name="logEnvs" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logEnvs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLogEnvs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `logK8S`<sup>Required</sup> <a name="logK8S" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logK8S"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLogK8S();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `logLabels`<sup>Required</sup> <a name="logLabels" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.logLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLogLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameSpaceRegex`<sup>Required</sup> <a name="nameSpaceRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.nameSpaceRegex"></a>

```java
public java.lang.String getNameSpaceRegex();
```

- *Type:* java.lang.String

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.paths"></a>

```java
public java.util.List<java.lang.String> getPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pathType`<sup>Required</sup> <a name="pathType" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.pathType"></a>

```java
public java.lang.String getPathType();
```

- *Type:* java.lang.String

---

##### `podNameRegex`<sup>Required</sup> <a name="podNameRegex" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.podNameRegex"></a>

```java
public java.lang.String getPodNameRegex();
```

- *Type:* java.lang.String

---

##### `stderr`<sup>Required</sup> <a name="stderr" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.stderr"></a>

```java
public java.lang.Object getStderr();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stdout`<sup>Required</sup> <a name="stdout" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.stdout"></a>

```java
public java.lang.Object getStdout();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigOutputReference.property.internalValue"></a>

```java
public LtsCceAccessV3AccessConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfig">LtsCceAccessV3AccessConfig</a>

---


### LtsCceAccessV3AccessConfigSingleLogFormatOutputReference <a name="LtsCceAccessV3AccessConfigSingleLogFormatOutputReference" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_cce_access_v3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference;

new LtsCceAccessV3AccessConfigSingleLogFormatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat">LtsCceAccessV3AccessConfigSingleLogFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormatOutputReference.property.internalValue"></a>

```java
public LtsCceAccessV3AccessConfigSingleLogFormat getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCceAccessV3.LtsCceAccessV3AccessConfigSingleLogFormat">LtsCceAccessV3AccessConfigSingleLogFormat</a>

---



