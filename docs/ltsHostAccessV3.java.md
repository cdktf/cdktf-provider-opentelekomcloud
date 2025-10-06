# `ltsHostAccessV3` Submodule <a name="`ltsHostAccessV3` Submodule" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LtsHostAccessV3 <a name="LtsHostAccessV3" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3 opentelekomcloud_lts_host_access_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_host_access_v3.LtsHostAccessV3;

LtsHostAccessV3.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessConfig(LtsHostAccessV3AccessConfig)
    .logGroupId(java.lang.String)
    .logStreamId(java.lang.String)
    .name(java.lang.String)
//  .binaryCollect(java.lang.Boolean|IResolvable)
//  .hostGroupIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .logSplit(java.lang.Boolean|IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig">LtsHostAccessV3AccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#log_group_id LtsHostAccessV3#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.logStreamId">logStreamId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#log_stream_id LtsHostAccessV3#log_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#name LtsHostAccessV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.binaryCollect">binaryCollect</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#binary_collect LtsHostAccessV3#binary_collect}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.hostGroupIds">hostGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#host_group_ids LtsHostAccessV3#host_group_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#id LtsHostAccessV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.logSplit">logSplit</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#log_split LtsHostAccessV3#log_split}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#tags LtsHostAccessV3#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.accessConfig"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig">LtsHostAccessV3AccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#access_config LtsHostAccessV3#access_config}

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.logGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#log_group_id LtsHostAccessV3#log_group_id}.

---

##### `logStreamId`<sup>Required</sup> <a name="logStreamId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.logStreamId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#log_stream_id LtsHostAccessV3#log_stream_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#name LtsHostAccessV3#name}.

---

##### `binaryCollect`<sup>Optional</sup> <a name="binaryCollect" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.binaryCollect"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#binary_collect LtsHostAccessV3#binary_collect}.

---

##### `hostGroupIds`<sup>Optional</sup> <a name="hostGroupIds" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.hostGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#host_group_ids LtsHostAccessV3#host_group_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#id LtsHostAccessV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logSplit`<sup>Optional</sup> <a name="logSplit" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.logSplit"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#log_split LtsHostAccessV3#log_split}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#tags LtsHostAccessV3#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.putAccessConfig">putAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetBinaryCollect">resetBinaryCollect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetHostGroupIds">resetHostGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetLogSplit">resetLogSplit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessConfig` <a name="putAccessConfig" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.putAccessConfig"></a>

```java
public void putAccessConfig(LtsHostAccessV3AccessConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.putAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig">LtsHostAccessV3AccessConfig</a>

---

##### `resetBinaryCollect` <a name="resetBinaryCollect" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetBinaryCollect"></a>

```java
public void resetBinaryCollect()
```

##### `resetHostGroupIds` <a name="resetHostGroupIds" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetHostGroupIds"></a>

```java
public void resetHostGroupIds()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetId"></a>

```java
public void resetId()
```

##### `resetLogSplit` <a name="resetLogSplit" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetLogSplit"></a>

```java
public void resetLogSplit()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LtsHostAccessV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_host_access_v3.LtsHostAccessV3;

LtsHostAccessV3.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_host_access_v3.LtsHostAccessV3;

LtsHostAccessV3.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_host_access_v3.LtsHostAccessV3;

LtsHostAccessV3.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_host_access_v3.LtsHostAccessV3;

LtsHostAccessV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LtsHostAccessV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LtsHostAccessV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LtsHostAccessV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LtsHostAccessV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LtsHostAccessV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference">LtsHostAccessV3AccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.accessType">accessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logStreamName">logStreamName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.accessConfigInput">accessConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig">LtsHostAccessV3AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.binaryCollectInput">binaryCollectInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.hostGroupIdsInput">hostGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logGroupIdInput">logGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logSplitInput">logSplitInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logStreamIdInput">logStreamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.binaryCollect">binaryCollect</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.hostGroupIds">hostGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logSplit">logSplit</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logStreamId">logStreamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.accessConfig"></a>

```java
public LtsHostAccessV3AccessConfigOutputReference getAccessConfig();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference">LtsHostAccessV3AccessConfigOutputReference</a>

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.accessType"></a>

```java
public java.lang.String getAccessType();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

---

##### `logStreamName`<sup>Required</sup> <a name="logStreamName" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logStreamName"></a>

```java
public java.lang.String getLogStreamName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `accessConfigInput`<sup>Optional</sup> <a name="accessConfigInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.accessConfigInput"></a>

```java
public LtsHostAccessV3AccessConfig getAccessConfigInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig">LtsHostAccessV3AccessConfig</a>

---

##### `binaryCollectInput`<sup>Optional</sup> <a name="binaryCollectInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.binaryCollectInput"></a>

```java
public java.lang.Boolean|IResolvable getBinaryCollectInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `hostGroupIdsInput`<sup>Optional</sup> <a name="hostGroupIdsInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.hostGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getHostGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logGroupIdInput`<sup>Optional</sup> <a name="logGroupIdInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logGroupIdInput"></a>

```java
public java.lang.String getLogGroupIdInput();
```

- *Type:* java.lang.String

---

##### `logSplitInput`<sup>Optional</sup> <a name="logSplitInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logSplitInput"></a>

```java
public java.lang.Boolean|IResolvable getLogSplitInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `logStreamIdInput`<sup>Optional</sup> <a name="logStreamIdInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logStreamIdInput"></a>

```java
public java.lang.String getLogStreamIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `binaryCollect`<sup>Required</sup> <a name="binaryCollect" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.binaryCollect"></a>

```java
public java.lang.Boolean|IResolvable getBinaryCollect();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `hostGroupIds`<sup>Required</sup> <a name="hostGroupIds" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.hostGroupIds"></a>

```java
public java.util.List<java.lang.String> getHostGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logGroupId"></a>

```java
public java.lang.String getLogGroupId();
```

- *Type:* java.lang.String

---

##### `logSplit`<sup>Required</sup> <a name="logSplit" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logSplit"></a>

```java
public java.lang.Boolean|IResolvable getLogSplit();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `logStreamId`<sup>Required</sup> <a name="logStreamId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.logStreamId"></a>

```java
public java.lang.String getLogStreamId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LtsHostAccessV3AccessConfig <a name="LtsHostAccessV3AccessConfig" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_host_access_v3.LtsHostAccessV3AccessConfig;

LtsHostAccessV3AccessConfig.builder()
    .paths(java.util.List<java.lang.String>)
//  .blackPaths(java.util.List<java.lang.String>)
//  .multiLogFormat(LtsHostAccessV3AccessConfigMultiLogFormat)
//  .singleLogFormat(LtsHostAccessV3AccessConfigSingleLogFormat)
//  .windowsLogInfo(LtsHostAccessV3AccessConfigWindowsLogInfo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.paths">paths</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#paths LtsHostAccessV3#paths}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.blackPaths">blackPaths</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#black_paths LtsHostAccessV3#black_paths}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.multiLogFormat">multiLogFormat</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat">LtsHostAccessV3AccessConfigMultiLogFormat</a></code> | multi_log_format block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.singleLogFormat">singleLogFormat</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat">LtsHostAccessV3AccessConfigSingleLogFormat</a></code> | single_log_format block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.windowsLogInfo">windowsLogInfo</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo">LtsHostAccessV3AccessConfigWindowsLogInfo</a></code> | windows_log_info block. |

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.paths"></a>

```java
public java.util.List<java.lang.String> getPaths();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#paths LtsHostAccessV3#paths}.

---

##### `blackPaths`<sup>Optional</sup> <a name="blackPaths" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.blackPaths"></a>

```java
public java.util.List<java.lang.String> getBlackPaths();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#black_paths LtsHostAccessV3#black_paths}.

---

##### `multiLogFormat`<sup>Optional</sup> <a name="multiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.multiLogFormat"></a>

```java
public LtsHostAccessV3AccessConfigMultiLogFormat getMultiLogFormat();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat">LtsHostAccessV3AccessConfigMultiLogFormat</a>

multi_log_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#multi_log_format LtsHostAccessV3#multi_log_format}

---

##### `singleLogFormat`<sup>Optional</sup> <a name="singleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.singleLogFormat"></a>

```java
public LtsHostAccessV3AccessConfigSingleLogFormat getSingleLogFormat();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat">LtsHostAccessV3AccessConfigSingleLogFormat</a>

single_log_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#single_log_format LtsHostAccessV3#single_log_format}

---

##### `windowsLogInfo`<sup>Optional</sup> <a name="windowsLogInfo" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig.property.windowsLogInfo"></a>

```java
public LtsHostAccessV3AccessConfigWindowsLogInfo getWindowsLogInfo();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo">LtsHostAccessV3AccessConfigWindowsLogInfo</a>

windows_log_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#windows_log_info LtsHostAccessV3#windows_log_info}

---

### LtsHostAccessV3AccessConfigMultiLogFormat <a name="LtsHostAccessV3AccessConfigMultiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_host_access_v3.LtsHostAccessV3AccessConfigMultiLogFormat;

LtsHostAccessV3AccessConfigMultiLogFormat.builder()
    .mode(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#mode LtsHostAccessV3#mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#value LtsHostAccessV3#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#mode LtsHostAccessV3#mode}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#value LtsHostAccessV3#value}.

---

### LtsHostAccessV3AccessConfigSingleLogFormat <a name="LtsHostAccessV3AccessConfigSingleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_host_access_v3.LtsHostAccessV3AccessConfigSingleLogFormat;

LtsHostAccessV3AccessConfigSingleLogFormat.builder()
    .mode(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#mode LtsHostAccessV3#mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#value LtsHostAccessV3#value}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#mode LtsHostAccessV3#mode}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#value LtsHostAccessV3#value}.

---

### LtsHostAccessV3AccessConfigWindowsLogInfo <a name="LtsHostAccessV3AccessConfigWindowsLogInfo" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_host_access_v3.LtsHostAccessV3AccessConfigWindowsLogInfo;

LtsHostAccessV3AccessConfigWindowsLogInfo.builder()
    .categories(java.util.List<java.lang.String>)
    .eventLevel(java.util.List<java.lang.String>)
    .timeOffset(java.lang.Number)
    .timeOffsetUnit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.property.categories">categories</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#categories LtsHostAccessV3#categories}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.property.eventLevel">eventLevel</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#event_level LtsHostAccessV3#event_level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.property.timeOffset">timeOffset</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#time_offset LtsHostAccessV3#time_offset}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.property.timeOffsetUnit">timeOffsetUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#time_offset_unit LtsHostAccessV3#time_offset_unit}. |

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.property.categories"></a>

```java
public java.util.List<java.lang.String> getCategories();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#categories LtsHostAccessV3#categories}.

---

##### `eventLevel`<sup>Required</sup> <a name="eventLevel" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.property.eventLevel"></a>

```java
public java.util.List<java.lang.String> getEventLevel();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#event_level LtsHostAccessV3#event_level}.

---

##### `timeOffset`<sup>Required</sup> <a name="timeOffset" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.property.timeOffset"></a>

```java
public java.lang.Number getTimeOffset();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#time_offset LtsHostAccessV3#time_offset}.

---

##### `timeOffsetUnit`<sup>Required</sup> <a name="timeOffsetUnit" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo.property.timeOffsetUnit"></a>

```java
public java.lang.String getTimeOffsetUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#time_offset_unit LtsHostAccessV3#time_offset_unit}.

---

### LtsHostAccessV3Config <a name="LtsHostAccessV3Config" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_host_access_v3.LtsHostAccessV3Config;

LtsHostAccessV3Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessConfig(LtsHostAccessV3AccessConfig)
    .logGroupId(java.lang.String)
    .logStreamId(java.lang.String)
    .name(java.lang.String)
//  .binaryCollect(java.lang.Boolean|IResolvable)
//  .hostGroupIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .logSplit(java.lang.Boolean|IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig">LtsHostAccessV3AccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#log_group_id LtsHostAccessV3#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.logStreamId">logStreamId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#log_stream_id LtsHostAccessV3#log_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#name LtsHostAccessV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.binaryCollect">binaryCollect</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#binary_collect LtsHostAccessV3#binary_collect}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.hostGroupIds">hostGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#host_group_ids LtsHostAccessV3#host_group_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#id LtsHostAccessV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.logSplit">logSplit</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#log_split LtsHostAccessV3#log_split}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#tags LtsHostAccessV3#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.accessConfig"></a>

```java
public LtsHostAccessV3AccessConfig getAccessConfig();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig">LtsHostAccessV3AccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#access_config LtsHostAccessV3#access_config}

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.logGroupId"></a>

```java
public java.lang.String getLogGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#log_group_id LtsHostAccessV3#log_group_id}.

---

##### `logStreamId`<sup>Required</sup> <a name="logStreamId" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.logStreamId"></a>

```java
public java.lang.String getLogStreamId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#log_stream_id LtsHostAccessV3#log_stream_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#name LtsHostAccessV3#name}.

---

##### `binaryCollect`<sup>Optional</sup> <a name="binaryCollect" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.binaryCollect"></a>

```java
public java.lang.Boolean|IResolvable getBinaryCollect();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#binary_collect LtsHostAccessV3#binary_collect}.

---

##### `hostGroupIds`<sup>Optional</sup> <a name="hostGroupIds" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.hostGroupIds"></a>

```java
public java.util.List<java.lang.String> getHostGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#host_group_ids LtsHostAccessV3#host_group_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#id LtsHostAccessV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logSplit`<sup>Optional</sup> <a name="logSplit" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.logSplit"></a>

```java
public java.lang.Boolean|IResolvable getLogSplit();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#log_split LtsHostAccessV3#log_split}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3Config.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/lts_host_access_v3#tags LtsHostAccessV3#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### LtsHostAccessV3AccessConfigMultiLogFormatOutputReference <a name="LtsHostAccessV3AccessConfigMultiLogFormatOutputReference" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_host_access_v3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference;

new LtsHostAccessV3AccessConfigMultiLogFormatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat">LtsHostAccessV3AccessConfigMultiLogFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference.property.internalValue"></a>

```java
public LtsHostAccessV3AccessConfigMultiLogFormat getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat">LtsHostAccessV3AccessConfigMultiLogFormat</a>

---


### LtsHostAccessV3AccessConfigOutputReference <a name="LtsHostAccessV3AccessConfigOutputReference" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_host_access_v3.LtsHostAccessV3AccessConfigOutputReference;

new LtsHostAccessV3AccessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putMultiLogFormat">putMultiLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putSingleLogFormat">putSingleLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putWindowsLogInfo">putWindowsLogInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resetBlackPaths">resetBlackPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resetMultiLogFormat">resetMultiLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resetSingleLogFormat">resetSingleLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resetWindowsLogInfo">resetWindowsLogInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMultiLogFormat` <a name="putMultiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putMultiLogFormat"></a>

```java
public void putMultiLogFormat(LtsHostAccessV3AccessConfigMultiLogFormat value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putMultiLogFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat">LtsHostAccessV3AccessConfigMultiLogFormat</a>

---

##### `putSingleLogFormat` <a name="putSingleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putSingleLogFormat"></a>

```java
public void putSingleLogFormat(LtsHostAccessV3AccessConfigSingleLogFormat value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putSingleLogFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat">LtsHostAccessV3AccessConfigSingleLogFormat</a>

---

##### `putWindowsLogInfo` <a name="putWindowsLogInfo" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putWindowsLogInfo"></a>

```java
public void putWindowsLogInfo(LtsHostAccessV3AccessConfigWindowsLogInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.putWindowsLogInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo">LtsHostAccessV3AccessConfigWindowsLogInfo</a>

---

##### `resetBlackPaths` <a name="resetBlackPaths" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resetBlackPaths"></a>

```java
public void resetBlackPaths()
```

##### `resetMultiLogFormat` <a name="resetMultiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resetMultiLogFormat"></a>

```java
public void resetMultiLogFormat()
```

##### `resetSingleLogFormat` <a name="resetSingleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resetSingleLogFormat"></a>

```java
public void resetSingleLogFormat()
```

##### `resetWindowsLogInfo` <a name="resetWindowsLogInfo" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.resetWindowsLogInfo"></a>

```java
public void resetWindowsLogInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.multiLogFormat">multiLogFormat</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference">LtsHostAccessV3AccessConfigMultiLogFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.singleLogFormat">singleLogFormat</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference">LtsHostAccessV3AccessConfigSingleLogFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.windowsLogInfo">windowsLogInfo</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference">LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.blackPathsInput">blackPathsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.multiLogFormatInput">multiLogFormatInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat">LtsHostAccessV3AccessConfigMultiLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.pathsInput">pathsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.singleLogFormatInput">singleLogFormatInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat">LtsHostAccessV3AccessConfigSingleLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.windowsLogInfoInput">windowsLogInfoInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo">LtsHostAccessV3AccessConfigWindowsLogInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.blackPaths">blackPaths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.paths">paths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig">LtsHostAccessV3AccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `multiLogFormat`<sup>Required</sup> <a name="multiLogFormat" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.multiLogFormat"></a>

```java
public LtsHostAccessV3AccessConfigMultiLogFormatOutputReference getMultiLogFormat();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormatOutputReference">LtsHostAccessV3AccessConfigMultiLogFormatOutputReference</a>

---

##### `singleLogFormat`<sup>Required</sup> <a name="singleLogFormat" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.singleLogFormat"></a>

```java
public LtsHostAccessV3AccessConfigSingleLogFormatOutputReference getSingleLogFormat();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference">LtsHostAccessV3AccessConfigSingleLogFormatOutputReference</a>

---

##### `windowsLogInfo`<sup>Required</sup> <a name="windowsLogInfo" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.windowsLogInfo"></a>

```java
public LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference getWindowsLogInfo();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference">LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference</a>

---

##### `blackPathsInput`<sup>Optional</sup> <a name="blackPathsInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.blackPathsInput"></a>

```java
public java.util.List<java.lang.String> getBlackPathsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `multiLogFormatInput`<sup>Optional</sup> <a name="multiLogFormatInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.multiLogFormatInput"></a>

```java
public LtsHostAccessV3AccessConfigMultiLogFormat getMultiLogFormatInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigMultiLogFormat">LtsHostAccessV3AccessConfigMultiLogFormat</a>

---

##### `pathsInput`<sup>Optional</sup> <a name="pathsInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.pathsInput"></a>

```java
public java.util.List<java.lang.String> getPathsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `singleLogFormatInput`<sup>Optional</sup> <a name="singleLogFormatInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.singleLogFormatInput"></a>

```java
public LtsHostAccessV3AccessConfigSingleLogFormat getSingleLogFormatInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat">LtsHostAccessV3AccessConfigSingleLogFormat</a>

---

##### `windowsLogInfoInput`<sup>Optional</sup> <a name="windowsLogInfoInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.windowsLogInfoInput"></a>

```java
public LtsHostAccessV3AccessConfigWindowsLogInfo getWindowsLogInfoInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo">LtsHostAccessV3AccessConfigWindowsLogInfo</a>

---

##### `blackPaths`<sup>Required</sup> <a name="blackPaths" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.blackPaths"></a>

```java
public java.util.List<java.lang.String> getBlackPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.paths"></a>

```java
public java.util.List<java.lang.String> getPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigOutputReference.property.internalValue"></a>

```java
public LtsHostAccessV3AccessConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfig">LtsHostAccessV3AccessConfig</a>

---


### LtsHostAccessV3AccessConfigSingleLogFormatOutputReference <a name="LtsHostAccessV3AccessConfigSingleLogFormatOutputReference" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_host_access_v3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference;

new LtsHostAccessV3AccessConfigSingleLogFormatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat">LtsHostAccessV3AccessConfigSingleLogFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormatOutputReference.property.internalValue"></a>

```java
public LtsHostAccessV3AccessConfigSingleLogFormat getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigSingleLogFormat">LtsHostAccessV3AccessConfigSingleLogFormat</a>

---


### LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference <a name="LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_host_access_v3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference;

new LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.categoriesInput">categoriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.eventLevelInput">eventLevelInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.timeOffsetInput">timeOffsetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.timeOffsetUnitInput">timeOffsetUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.categories">categories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.eventLevel">eventLevel</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.timeOffset">timeOffset</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.timeOffsetUnit">timeOffsetUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo">LtsHostAccessV3AccessConfigWindowsLogInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `categoriesInput`<sup>Optional</sup> <a name="categoriesInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.categoriesInput"></a>

```java
public java.util.List<java.lang.String> getCategoriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `eventLevelInput`<sup>Optional</sup> <a name="eventLevelInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.eventLevelInput"></a>

```java
public java.util.List<java.lang.String> getEventLevelInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeOffsetInput`<sup>Optional</sup> <a name="timeOffsetInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.timeOffsetInput"></a>

```java
public java.lang.Number getTimeOffsetInput();
```

- *Type:* java.lang.Number

---

##### `timeOffsetUnitInput`<sup>Optional</sup> <a name="timeOffsetUnitInput" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.timeOffsetUnitInput"></a>

```java
public java.lang.String getTimeOffsetUnitInput();
```

- *Type:* java.lang.String

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.categories"></a>

```java
public java.util.List<java.lang.String> getCategories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `eventLevel`<sup>Required</sup> <a name="eventLevel" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.eventLevel"></a>

```java
public java.util.List<java.lang.String> getEventLevel();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeOffset`<sup>Required</sup> <a name="timeOffset" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.timeOffset"></a>

```java
public java.lang.Number getTimeOffset();
```

- *Type:* java.lang.Number

---

##### `timeOffsetUnit`<sup>Required</sup> <a name="timeOffsetUnit" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.timeOffsetUnit"></a>

```java
public java.lang.String getTimeOffsetUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfoOutputReference.property.internalValue"></a>

```java
public LtsHostAccessV3AccessConfigWindowsLogInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsHostAccessV3.LtsHostAccessV3AccessConfigWindowsLogInfo">LtsHostAccessV3AccessConfigWindowsLogInfo</a>

---



