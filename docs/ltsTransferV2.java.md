# `ltsTransferV2` Submodule <a name="`ltsTransferV2` Submodule" id="@cdktf/provider-opentelekomcloud.ltsTransferV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LtsTransferV2 <a name="LtsTransferV2" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2 opentelekomcloud_lts_transfer_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_transfer_v2.LtsTransferV2;

LtsTransferV2.Builder.create(Construct scope, java.lang.String id)
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
    .logStreams(IResolvable)
    .logStreams(java.util.List<LtsTransferV2LogStreams>)
    .logTransferInfo(LtsTransferV2LogTransferInfo)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_group_id LtsTransferV2#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.logStreams">logStreams</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreams">LtsTransferV2LogStreams</a>></code> | log_streams block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.logTransferInfo">logTransferInfo</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo">LtsTransferV2LogTransferInfo</a></code> | log_transfer_info block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#id LtsTransferV2#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.logGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_group_id LtsTransferV2#log_group_id}.

---

##### `logStreams`<sup>Required</sup> <a name="logStreams" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.logStreams"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreams">LtsTransferV2LogStreams</a>>

log_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_streams LtsTransferV2#log_streams}

---

##### `logTransferInfo`<sup>Required</sup> <a name="logTransferInfo" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.logTransferInfo"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo">LtsTransferV2LogTransferInfo</a>

log_transfer_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_transfer_info LtsTransferV2#log_transfer_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#id LtsTransferV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.putLogStreams">putLogStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.putLogTransferInfo">putLogTransferInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogStreams` <a name="putLogStreams" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.putLogStreams"></a>

```java
public void putLogStreams(IResolvable OR java.util.List<LtsTransferV2LogStreams> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.putLogStreams.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreams">LtsTransferV2LogStreams</a>>

---

##### `putLogTransferInfo` <a name="putLogTransferInfo" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.putLogTransferInfo"></a>

```java
public void putLogTransferInfo(LtsTransferV2LogTransferInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.putLogTransferInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo">LtsTransferV2LogTransferInfo</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LtsTransferV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_transfer_v2.LtsTransferV2;

LtsTransferV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_transfer_v2.LtsTransferV2;

LtsTransferV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_transfer_v2.LtsTransferV2;

LtsTransferV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_transfer_v2.LtsTransferV2;

LtsTransferV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LtsTransferV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LtsTransferV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LtsTransferV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LtsTransferV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LtsTransferV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logStreams">logStreams</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList">LtsTransferV2LogStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logTransferInfo">logTransferInfo</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference">LtsTransferV2LogTransferInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logGroupIdInput">logGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logStreamsInput">logStreamsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreams">LtsTransferV2LogStreams</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logTransferInfoInput">logTransferInfoInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo">LtsTransferV2LogTransferInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

---

##### `logStreams`<sup>Required</sup> <a name="logStreams" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logStreams"></a>

```java
public LtsTransferV2LogStreamsList getLogStreams();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList">LtsTransferV2LogStreamsList</a>

---

##### `logTransferInfo`<sup>Required</sup> <a name="logTransferInfo" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logTransferInfo"></a>

```java
public LtsTransferV2LogTransferInfoOutputReference getLogTransferInfo();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference">LtsTransferV2LogTransferInfoOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logGroupIdInput`<sup>Optional</sup> <a name="logGroupIdInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logGroupIdInput"></a>

```java
public java.lang.String getLogGroupIdInput();
```

- *Type:* java.lang.String

---

##### `logStreamsInput`<sup>Optional</sup> <a name="logStreamsInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logStreamsInput"></a>

```java
public java.lang.Object getLogStreamsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreams">LtsTransferV2LogStreams</a>>

---

##### `logTransferInfoInput`<sup>Optional</sup> <a name="logTransferInfoInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logTransferInfoInput"></a>

```java
public LtsTransferV2LogTransferInfo getLogTransferInfoInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo">LtsTransferV2LogTransferInfo</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.logGroupId"></a>

```java
public java.lang.String getLogGroupId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LtsTransferV2Config <a name="LtsTransferV2Config" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_transfer_v2.LtsTransferV2Config;

LtsTransferV2Config.builder()
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
    .logStreams(IResolvable)
    .logStreams(java.util.List<LtsTransferV2LogStreams>)
    .logTransferInfo(LtsTransferV2LogTransferInfo)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_group_id LtsTransferV2#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.logStreams">logStreams</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreams">LtsTransferV2LogStreams</a>></code> | log_streams block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.logTransferInfo">logTransferInfo</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo">LtsTransferV2LogTransferInfo</a></code> | log_transfer_info block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#id LtsTransferV2#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.logGroupId"></a>

```java
public java.lang.String getLogGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_group_id LtsTransferV2#log_group_id}.

---

##### `logStreams`<sup>Required</sup> <a name="logStreams" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.logStreams"></a>

```java
public java.lang.Object getLogStreams();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreams">LtsTransferV2LogStreams</a>>

log_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_streams LtsTransferV2#log_streams}

---

##### `logTransferInfo`<sup>Required</sup> <a name="logTransferInfo" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.logTransferInfo"></a>

```java
public LtsTransferV2LogTransferInfo getLogTransferInfo();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo">LtsTransferV2LogTransferInfo</a>

log_transfer_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_transfer_info LtsTransferV2#log_transfer_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#id LtsTransferV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### LtsTransferV2LogStreams <a name="LtsTransferV2LogStreams" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_transfer_v2.LtsTransferV2LogStreams;

LtsTransferV2LogStreams.builder()
    .logStreamId(java.lang.String)
//  .logStreamName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreams.property.logStreamId">logStreamId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_stream_id LtsTransferV2#log_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreams.property.logStreamName">logStreamName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_stream_name LtsTransferV2#log_stream_name}. |

---

##### `logStreamId`<sup>Required</sup> <a name="logStreamId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreams.property.logStreamId"></a>

```java
public java.lang.String getLogStreamId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_stream_id LtsTransferV2#log_stream_id}.

---

##### `logStreamName`<sup>Optional</sup> <a name="logStreamName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreams.property.logStreamName"></a>

```java
public java.lang.String getLogStreamName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_stream_name LtsTransferV2#log_stream_name}.

---

### LtsTransferV2LogTransferInfo <a name="LtsTransferV2LogTransferInfo" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_transfer_v2.LtsTransferV2LogTransferInfo;

LtsTransferV2LogTransferInfo.builder()
    .logStorageFormat(java.lang.String)
    .logTransferDetail(LtsTransferV2LogTransferInfoLogTransferDetail)
    .logTransferMode(java.lang.String)
    .logTransferStatus(java.lang.String)
    .logTransferType(java.lang.String)
//  .logAgencyTransfer(LtsTransferV2LogTransferInfoLogAgencyTransfer)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.property.logStorageFormat">logStorageFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_storage_format LtsTransferV2#log_storage_format}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.property.logTransferDetail">logTransferDetail</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail">LtsTransferV2LogTransferInfoLogTransferDetail</a></code> | log_transfer_detail block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.property.logTransferMode">logTransferMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_transfer_mode LtsTransferV2#log_transfer_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.property.logTransferStatus">logTransferStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_transfer_status LtsTransferV2#log_transfer_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.property.logTransferType">logTransferType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_transfer_type LtsTransferV2#log_transfer_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.property.logAgencyTransfer">logAgencyTransfer</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer">LtsTransferV2LogTransferInfoLogAgencyTransfer</a></code> | log_agency_transfer block. |

---

##### `logStorageFormat`<sup>Required</sup> <a name="logStorageFormat" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.property.logStorageFormat"></a>

```java
public java.lang.String getLogStorageFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_storage_format LtsTransferV2#log_storage_format}.

---

##### `logTransferDetail`<sup>Required</sup> <a name="logTransferDetail" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.property.logTransferDetail"></a>

```java
public LtsTransferV2LogTransferInfoLogTransferDetail getLogTransferDetail();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail">LtsTransferV2LogTransferInfoLogTransferDetail</a>

log_transfer_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_transfer_detail LtsTransferV2#log_transfer_detail}

---

##### `logTransferMode`<sup>Required</sup> <a name="logTransferMode" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.property.logTransferMode"></a>

```java
public java.lang.String getLogTransferMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_transfer_mode LtsTransferV2#log_transfer_mode}.

---

##### `logTransferStatus`<sup>Required</sup> <a name="logTransferStatus" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.property.logTransferStatus"></a>

```java
public java.lang.String getLogTransferStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_transfer_status LtsTransferV2#log_transfer_status}.

---

##### `logTransferType`<sup>Required</sup> <a name="logTransferType" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.property.logTransferType"></a>

```java
public java.lang.String getLogTransferType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_transfer_type LtsTransferV2#log_transfer_type}.

---

##### `logAgencyTransfer`<sup>Optional</sup> <a name="logAgencyTransfer" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo.property.logAgencyTransfer"></a>

```java
public LtsTransferV2LogTransferInfoLogAgencyTransfer getLogAgencyTransfer();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer">LtsTransferV2LogTransferInfoLogAgencyTransfer</a>

log_agency_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#log_agency_transfer LtsTransferV2#log_agency_transfer}

---

### LtsTransferV2LogTransferInfoLogAgencyTransfer <a name="LtsTransferV2LogTransferInfoLogAgencyTransfer" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_transfer_v2.LtsTransferV2LogTransferInfoLogAgencyTransfer;

LtsTransferV2LogTransferInfoLogAgencyTransfer.builder()
    .agencyDomainId(java.lang.String)
    .agencyDomainName(java.lang.String)
    .agencyName(java.lang.String)
    .agencyProjectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer.property.agencyDomainId">agencyDomainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#agency_domain_id LtsTransferV2#agency_domain_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer.property.agencyDomainName">agencyDomainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#agency_domain_name LtsTransferV2#agency_domain_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer.property.agencyName">agencyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#agency_name LtsTransferV2#agency_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer.property.agencyProjectId">agencyProjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#agency_project_id LtsTransferV2#agency_project_id}. |

---

##### `agencyDomainId`<sup>Required</sup> <a name="agencyDomainId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer.property.agencyDomainId"></a>

```java
public java.lang.String getAgencyDomainId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#agency_domain_id LtsTransferV2#agency_domain_id}.

---

##### `agencyDomainName`<sup>Required</sup> <a name="agencyDomainName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer.property.agencyDomainName"></a>

```java
public java.lang.String getAgencyDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#agency_domain_name LtsTransferV2#agency_domain_name}.

---

##### `agencyName`<sup>Required</sup> <a name="agencyName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer.property.agencyName"></a>

```java
public java.lang.String getAgencyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#agency_name LtsTransferV2#agency_name}.

---

##### `agencyProjectId`<sup>Required</sup> <a name="agencyProjectId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer.property.agencyProjectId"></a>

```java
public java.lang.String getAgencyProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#agency_project_id LtsTransferV2#agency_project_id}.

---

### LtsTransferV2LogTransferInfoLogTransferDetail <a name="LtsTransferV2LogTransferInfoLogTransferDetail" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_transfer_v2.LtsTransferV2LogTransferInfoLogTransferDetail;

LtsTransferV2LogTransferInfoLogTransferDetail.builder()
//  .obsBucketName(java.lang.String)
//  .obsDirPrefixName(java.lang.String)
//  .obsEncryptedEnable(java.lang.Boolean)
//  .obsEncryptedEnable(IResolvable)
//  .obsEncryptedId(java.lang.String)
//  .obsEpsId(java.lang.String)
//  .obsPeriod(java.lang.Number)
//  .obsPeriodUnit(java.lang.String)
//  .obsPrefixName(java.lang.String)
//  .obsTimeZone(java.lang.String)
//  .obsTimeZoneId(java.lang.String)
//  .obsTransferPath(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsBucketName">obsBucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_bucket_name LtsTransferV2#obs_bucket_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsDirPrefixName">obsDirPrefixName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_dir_prefix_name LtsTransferV2#obs_dir_prefix_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsEncryptedEnable">obsEncryptedEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_encrypted_enable LtsTransferV2#obs_encrypted_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsEncryptedId">obsEncryptedId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_encrypted_id LtsTransferV2#obs_encrypted_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsEpsId">obsEpsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_eps_id LtsTransferV2#obs_eps_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsPeriod">obsPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_period LtsTransferV2#obs_period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsPeriodUnit">obsPeriodUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_period_unit LtsTransferV2#obs_period_unit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsPrefixName">obsPrefixName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_prefix_name LtsTransferV2#obs_prefix_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsTimeZone">obsTimeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_time_zone LtsTransferV2#obs_time_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsTimeZoneId">obsTimeZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_time_zone_id LtsTransferV2#obs_time_zone_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsTransferPath">obsTransferPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_transfer_path LtsTransferV2#obs_transfer_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#tags LtsTransferV2#tags}. |

---

##### `obsBucketName`<sup>Optional</sup> <a name="obsBucketName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsBucketName"></a>

```java
public java.lang.String getObsBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_bucket_name LtsTransferV2#obs_bucket_name}.

---

##### `obsDirPrefixName`<sup>Optional</sup> <a name="obsDirPrefixName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsDirPrefixName"></a>

```java
public java.lang.String getObsDirPrefixName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_dir_prefix_name LtsTransferV2#obs_dir_prefix_name}.

---

##### `obsEncryptedEnable`<sup>Optional</sup> <a name="obsEncryptedEnable" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsEncryptedEnable"></a>

```java
public java.lang.Object getObsEncryptedEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_encrypted_enable LtsTransferV2#obs_encrypted_enable}.

---

##### `obsEncryptedId`<sup>Optional</sup> <a name="obsEncryptedId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsEncryptedId"></a>

```java
public java.lang.String getObsEncryptedId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_encrypted_id LtsTransferV2#obs_encrypted_id}.

---

##### `obsEpsId`<sup>Optional</sup> <a name="obsEpsId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsEpsId"></a>

```java
public java.lang.String getObsEpsId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_eps_id LtsTransferV2#obs_eps_id}.

---

##### `obsPeriod`<sup>Optional</sup> <a name="obsPeriod" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsPeriod"></a>

```java
public java.lang.Number getObsPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_period LtsTransferV2#obs_period}.

---

##### `obsPeriodUnit`<sup>Optional</sup> <a name="obsPeriodUnit" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsPeriodUnit"></a>

```java
public java.lang.String getObsPeriodUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_period_unit LtsTransferV2#obs_period_unit}.

---

##### `obsPrefixName`<sup>Optional</sup> <a name="obsPrefixName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsPrefixName"></a>

```java
public java.lang.String getObsPrefixName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_prefix_name LtsTransferV2#obs_prefix_name}.

---

##### `obsTimeZone`<sup>Optional</sup> <a name="obsTimeZone" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsTimeZone"></a>

```java
public java.lang.String getObsTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_time_zone LtsTransferV2#obs_time_zone}.

---

##### `obsTimeZoneId`<sup>Optional</sup> <a name="obsTimeZoneId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsTimeZoneId"></a>

```java
public java.lang.String getObsTimeZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_time_zone_id LtsTransferV2#obs_time_zone_id}.

---

##### `obsTransferPath`<sup>Optional</sup> <a name="obsTransferPath" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.obsTransferPath"></a>

```java
public java.lang.String getObsTransferPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#obs_transfer_path LtsTransferV2#obs_transfer_path}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_transfer_v2#tags LtsTransferV2#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### LtsTransferV2LogStreamsList <a name="LtsTransferV2LogStreamsList" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_transfer_v2.LtsTransferV2LogStreamsList;

new LtsTransferV2LogStreamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.get"></a>

```java
public LtsTransferV2LogStreamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreams">LtsTransferV2LogStreams</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreams">LtsTransferV2LogStreams</a>>

---


### LtsTransferV2LogStreamsOutputReference <a name="LtsTransferV2LogStreamsOutputReference" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_transfer_v2.LtsTransferV2LogStreamsOutputReference;

new LtsTransferV2LogStreamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.resetLogStreamName">resetLogStreamName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogStreamName` <a name="resetLogStreamName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.resetLogStreamName"></a>

```java
public void resetLogStreamName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.logStreamIdInput">logStreamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.logStreamNameInput">logStreamNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.logStreamId">logStreamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.logStreamName">logStreamName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreams">LtsTransferV2LogStreams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logStreamIdInput`<sup>Optional</sup> <a name="logStreamIdInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.logStreamIdInput"></a>

```java
public java.lang.String getLogStreamIdInput();
```

- *Type:* java.lang.String

---

##### `logStreamNameInput`<sup>Optional</sup> <a name="logStreamNameInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.logStreamNameInput"></a>

```java
public java.lang.String getLogStreamNameInput();
```

- *Type:* java.lang.String

---

##### `logStreamId`<sup>Required</sup> <a name="logStreamId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.logStreamId"></a>

```java
public java.lang.String getLogStreamId();
```

- *Type:* java.lang.String

---

##### `logStreamName`<sup>Required</sup> <a name="logStreamName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.logStreamName"></a>

```java
public java.lang.String getLogStreamName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreamsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogStreams">LtsTransferV2LogStreams</a>

---


### LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference <a name="LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_transfer_v2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference;

new LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyDomainIdInput">agencyDomainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyDomainNameInput">agencyDomainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyNameInput">agencyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyProjectIdInput">agencyProjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyDomainId">agencyDomainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyDomainName">agencyDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyName">agencyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyProjectId">agencyProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer">LtsTransferV2LogTransferInfoLogAgencyTransfer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agencyDomainIdInput`<sup>Optional</sup> <a name="agencyDomainIdInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyDomainIdInput"></a>

```java
public java.lang.String getAgencyDomainIdInput();
```

- *Type:* java.lang.String

---

##### `agencyDomainNameInput`<sup>Optional</sup> <a name="agencyDomainNameInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyDomainNameInput"></a>

```java
public java.lang.String getAgencyDomainNameInput();
```

- *Type:* java.lang.String

---

##### `agencyNameInput`<sup>Optional</sup> <a name="agencyNameInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyNameInput"></a>

```java
public java.lang.String getAgencyNameInput();
```

- *Type:* java.lang.String

---

##### `agencyProjectIdInput`<sup>Optional</sup> <a name="agencyProjectIdInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyProjectIdInput"></a>

```java
public java.lang.String getAgencyProjectIdInput();
```

- *Type:* java.lang.String

---

##### `agencyDomainId`<sup>Required</sup> <a name="agencyDomainId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyDomainId"></a>

```java
public java.lang.String getAgencyDomainId();
```

- *Type:* java.lang.String

---

##### `agencyDomainName`<sup>Required</sup> <a name="agencyDomainName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyDomainName"></a>

```java
public java.lang.String getAgencyDomainName();
```

- *Type:* java.lang.String

---

##### `agencyName`<sup>Required</sup> <a name="agencyName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyName"></a>

```java
public java.lang.String getAgencyName();
```

- *Type:* java.lang.String

---

##### `agencyProjectId`<sup>Required</sup> <a name="agencyProjectId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.agencyProjectId"></a>

```java
public java.lang.String getAgencyProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference.property.internalValue"></a>

```java
public LtsTransferV2LogTransferInfoLogAgencyTransfer getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer">LtsTransferV2LogTransferInfoLogAgencyTransfer</a>

---


### LtsTransferV2LogTransferInfoLogTransferDetailOutputReference <a name="LtsTransferV2LogTransferInfoLogTransferDetailOutputReference" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_transfer_v2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference;

new LtsTransferV2LogTransferInfoLogTransferDetailOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsBucketName">resetObsBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsDirPrefixName">resetObsDirPrefixName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsEncryptedEnable">resetObsEncryptedEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsEncryptedId">resetObsEncryptedId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsEpsId">resetObsEpsId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsPeriod">resetObsPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsPeriodUnit">resetObsPeriodUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsPrefixName">resetObsPrefixName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsTimeZone">resetObsTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsTimeZoneId">resetObsTimeZoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsTransferPath">resetObsTransferPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetObsBucketName` <a name="resetObsBucketName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsBucketName"></a>

```java
public void resetObsBucketName()
```

##### `resetObsDirPrefixName` <a name="resetObsDirPrefixName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsDirPrefixName"></a>

```java
public void resetObsDirPrefixName()
```

##### `resetObsEncryptedEnable` <a name="resetObsEncryptedEnable" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsEncryptedEnable"></a>

```java
public void resetObsEncryptedEnable()
```

##### `resetObsEncryptedId` <a name="resetObsEncryptedId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsEncryptedId"></a>

```java
public void resetObsEncryptedId()
```

##### `resetObsEpsId` <a name="resetObsEpsId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsEpsId"></a>

```java
public void resetObsEpsId()
```

##### `resetObsPeriod` <a name="resetObsPeriod" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsPeriod"></a>

```java
public void resetObsPeriod()
```

##### `resetObsPeriodUnit` <a name="resetObsPeriodUnit" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsPeriodUnit"></a>

```java
public void resetObsPeriodUnit()
```

##### `resetObsPrefixName` <a name="resetObsPrefixName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsPrefixName"></a>

```java
public void resetObsPrefixName()
```

##### `resetObsTimeZone` <a name="resetObsTimeZone" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsTimeZone"></a>

```java
public void resetObsTimeZone()
```

##### `resetObsTimeZoneId` <a name="resetObsTimeZoneId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsTimeZoneId"></a>

```java
public void resetObsTimeZoneId()
```

##### `resetObsTransferPath` <a name="resetObsTransferPath" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetObsTransferPath"></a>

```java
public void resetObsTransferPath()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsBucketNameInput">obsBucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsDirPrefixNameInput">obsDirPrefixNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsEncryptedEnableInput">obsEncryptedEnableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsEncryptedIdInput">obsEncryptedIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsEpsIdInput">obsEpsIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsPeriodInput">obsPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsPeriodUnitInput">obsPeriodUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsPrefixNameInput">obsPrefixNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsTimeZoneIdInput">obsTimeZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsTimeZoneInput">obsTimeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsTransferPathInput">obsTransferPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsBucketName">obsBucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsDirPrefixName">obsDirPrefixName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsEncryptedEnable">obsEncryptedEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsEncryptedId">obsEncryptedId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsEpsId">obsEpsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsPeriod">obsPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsPeriodUnit">obsPeriodUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsPrefixName">obsPrefixName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsTimeZone">obsTimeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsTimeZoneId">obsTimeZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsTransferPath">obsTransferPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail">LtsTransferV2LogTransferInfoLogTransferDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `obsBucketNameInput`<sup>Optional</sup> <a name="obsBucketNameInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsBucketNameInput"></a>

```java
public java.lang.String getObsBucketNameInput();
```

- *Type:* java.lang.String

---

##### `obsDirPrefixNameInput`<sup>Optional</sup> <a name="obsDirPrefixNameInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsDirPrefixNameInput"></a>

```java
public java.lang.String getObsDirPrefixNameInput();
```

- *Type:* java.lang.String

---

##### `obsEncryptedEnableInput`<sup>Optional</sup> <a name="obsEncryptedEnableInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsEncryptedEnableInput"></a>

```java
public java.lang.Object getObsEncryptedEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `obsEncryptedIdInput`<sup>Optional</sup> <a name="obsEncryptedIdInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsEncryptedIdInput"></a>

```java
public java.lang.String getObsEncryptedIdInput();
```

- *Type:* java.lang.String

---

##### `obsEpsIdInput`<sup>Optional</sup> <a name="obsEpsIdInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsEpsIdInput"></a>

```java
public java.lang.String getObsEpsIdInput();
```

- *Type:* java.lang.String

---

##### `obsPeriodInput`<sup>Optional</sup> <a name="obsPeriodInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsPeriodInput"></a>

```java
public java.lang.Number getObsPeriodInput();
```

- *Type:* java.lang.Number

---

##### `obsPeriodUnitInput`<sup>Optional</sup> <a name="obsPeriodUnitInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsPeriodUnitInput"></a>

```java
public java.lang.String getObsPeriodUnitInput();
```

- *Type:* java.lang.String

---

##### `obsPrefixNameInput`<sup>Optional</sup> <a name="obsPrefixNameInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsPrefixNameInput"></a>

```java
public java.lang.String getObsPrefixNameInput();
```

- *Type:* java.lang.String

---

##### `obsTimeZoneIdInput`<sup>Optional</sup> <a name="obsTimeZoneIdInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsTimeZoneIdInput"></a>

```java
public java.lang.String getObsTimeZoneIdInput();
```

- *Type:* java.lang.String

---

##### `obsTimeZoneInput`<sup>Optional</sup> <a name="obsTimeZoneInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsTimeZoneInput"></a>

```java
public java.lang.String getObsTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `obsTransferPathInput`<sup>Optional</sup> <a name="obsTransferPathInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsTransferPathInput"></a>

```java
public java.lang.String getObsTransferPathInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `obsBucketName`<sup>Required</sup> <a name="obsBucketName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsBucketName"></a>

```java
public java.lang.String getObsBucketName();
```

- *Type:* java.lang.String

---

##### `obsDirPrefixName`<sup>Required</sup> <a name="obsDirPrefixName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsDirPrefixName"></a>

```java
public java.lang.String getObsDirPrefixName();
```

- *Type:* java.lang.String

---

##### `obsEncryptedEnable`<sup>Required</sup> <a name="obsEncryptedEnable" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsEncryptedEnable"></a>

```java
public java.lang.Object getObsEncryptedEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `obsEncryptedId`<sup>Required</sup> <a name="obsEncryptedId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsEncryptedId"></a>

```java
public java.lang.String getObsEncryptedId();
```

- *Type:* java.lang.String

---

##### `obsEpsId`<sup>Required</sup> <a name="obsEpsId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsEpsId"></a>

```java
public java.lang.String getObsEpsId();
```

- *Type:* java.lang.String

---

##### `obsPeriod`<sup>Required</sup> <a name="obsPeriod" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsPeriod"></a>

```java
public java.lang.Number getObsPeriod();
```

- *Type:* java.lang.Number

---

##### `obsPeriodUnit`<sup>Required</sup> <a name="obsPeriodUnit" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsPeriodUnit"></a>

```java
public java.lang.String getObsPeriodUnit();
```

- *Type:* java.lang.String

---

##### `obsPrefixName`<sup>Required</sup> <a name="obsPrefixName" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsPrefixName"></a>

```java
public java.lang.String getObsPrefixName();
```

- *Type:* java.lang.String

---

##### `obsTimeZone`<sup>Required</sup> <a name="obsTimeZone" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsTimeZone"></a>

```java
public java.lang.String getObsTimeZone();
```

- *Type:* java.lang.String

---

##### `obsTimeZoneId`<sup>Required</sup> <a name="obsTimeZoneId" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsTimeZoneId"></a>

```java
public java.lang.String getObsTimeZoneId();
```

- *Type:* java.lang.String

---

##### `obsTransferPath`<sup>Required</sup> <a name="obsTransferPath" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.obsTransferPath"></a>

```java
public java.lang.String getObsTransferPath();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference.property.internalValue"></a>

```java
public LtsTransferV2LogTransferInfoLogTransferDetail getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail">LtsTransferV2LogTransferInfoLogTransferDetail</a>

---


### LtsTransferV2LogTransferInfoOutputReference <a name="LtsTransferV2LogTransferInfoOutputReference" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_transfer_v2.LtsTransferV2LogTransferInfoOutputReference;

new LtsTransferV2LogTransferInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.putLogAgencyTransfer">putLogAgencyTransfer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.putLogTransferDetail">putLogTransferDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.resetLogAgencyTransfer">resetLogAgencyTransfer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogAgencyTransfer` <a name="putLogAgencyTransfer" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.putLogAgencyTransfer"></a>

```java
public void putLogAgencyTransfer(LtsTransferV2LogTransferInfoLogAgencyTransfer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.putLogAgencyTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer">LtsTransferV2LogTransferInfoLogAgencyTransfer</a>

---

##### `putLogTransferDetail` <a name="putLogTransferDetail" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.putLogTransferDetail"></a>

```java
public void putLogTransferDetail(LtsTransferV2LogTransferInfoLogTransferDetail value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.putLogTransferDetail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail">LtsTransferV2LogTransferInfoLogTransferDetail</a>

---

##### `resetLogAgencyTransfer` <a name="resetLogAgencyTransfer" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.resetLogAgencyTransfer"></a>

```java
public void resetLogAgencyTransfer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logAgencyTransfer">logAgencyTransfer</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference">LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logCreatedAt">logCreatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferDetail">logTransferDetail</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference">LtsTransferV2LogTransferInfoLogTransferDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logAgencyTransferInput">logAgencyTransferInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer">LtsTransferV2LogTransferInfoLogAgencyTransfer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logStorageFormatInput">logStorageFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferDetailInput">logTransferDetailInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail">LtsTransferV2LogTransferInfoLogTransferDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferModeInput">logTransferModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferStatusInput">logTransferStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferTypeInput">logTransferTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logStorageFormat">logStorageFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferMode">logTransferMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferStatus">logTransferStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferType">logTransferType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo">LtsTransferV2LogTransferInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logAgencyTransfer`<sup>Required</sup> <a name="logAgencyTransfer" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logAgencyTransfer"></a>

```java
public LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference getLogAgencyTransfer();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference">LtsTransferV2LogTransferInfoLogAgencyTransferOutputReference</a>

---

##### `logCreatedAt`<sup>Required</sup> <a name="logCreatedAt" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logCreatedAt"></a>

```java
public java.lang.String getLogCreatedAt();
```

- *Type:* java.lang.String

---

##### `logTransferDetail`<sup>Required</sup> <a name="logTransferDetail" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferDetail"></a>

```java
public LtsTransferV2LogTransferInfoLogTransferDetailOutputReference getLogTransferDetail();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetailOutputReference">LtsTransferV2LogTransferInfoLogTransferDetailOutputReference</a>

---

##### `logAgencyTransferInput`<sup>Optional</sup> <a name="logAgencyTransferInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logAgencyTransferInput"></a>

```java
public LtsTransferV2LogTransferInfoLogAgencyTransfer getLogAgencyTransferInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogAgencyTransfer">LtsTransferV2LogTransferInfoLogAgencyTransfer</a>

---

##### `logStorageFormatInput`<sup>Optional</sup> <a name="logStorageFormatInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logStorageFormatInput"></a>

```java
public java.lang.String getLogStorageFormatInput();
```

- *Type:* java.lang.String

---

##### `logTransferDetailInput`<sup>Optional</sup> <a name="logTransferDetailInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferDetailInput"></a>

```java
public LtsTransferV2LogTransferInfoLogTransferDetail getLogTransferDetailInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoLogTransferDetail">LtsTransferV2LogTransferInfoLogTransferDetail</a>

---

##### `logTransferModeInput`<sup>Optional</sup> <a name="logTransferModeInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferModeInput"></a>

```java
public java.lang.String getLogTransferModeInput();
```

- *Type:* java.lang.String

---

##### `logTransferStatusInput`<sup>Optional</sup> <a name="logTransferStatusInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferStatusInput"></a>

```java
public java.lang.String getLogTransferStatusInput();
```

- *Type:* java.lang.String

---

##### `logTransferTypeInput`<sup>Optional</sup> <a name="logTransferTypeInput" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferTypeInput"></a>

```java
public java.lang.String getLogTransferTypeInput();
```

- *Type:* java.lang.String

---

##### `logStorageFormat`<sup>Required</sup> <a name="logStorageFormat" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logStorageFormat"></a>

```java
public java.lang.String getLogStorageFormat();
```

- *Type:* java.lang.String

---

##### `logTransferMode`<sup>Required</sup> <a name="logTransferMode" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferMode"></a>

```java
public java.lang.String getLogTransferMode();
```

- *Type:* java.lang.String

---

##### `logTransferStatus`<sup>Required</sup> <a name="logTransferStatus" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferStatus"></a>

```java
public java.lang.String getLogTransferStatus();
```

- *Type:* java.lang.String

---

##### `logTransferType`<sup>Required</sup> <a name="logTransferType" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.logTransferType"></a>

```java
public java.lang.String getLogTransferType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfoOutputReference.property.internalValue"></a>

```java
public LtsTransferV2LogTransferInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsTransferV2.LtsTransferV2LogTransferInfo">LtsTransferV2LogTransferInfo</a>

---



