# `cssClusterV1` Submodule <a name="`cssClusterV1` Submodule" id="@cdktf/provider-opentelekomcloud.cssClusterV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CssClusterV1 <a name="CssClusterV1" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1 opentelekomcloud_css_cluster_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_cluster_v1.CssClusterV1;

CssClusterV1.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .nodeConfig(CssClusterV1NodeConfig)
//  .adminPass(java.lang.String)
//  .datastore(CssClusterV1Datastore)
//  .enableAuthority(java.lang.Boolean)
//  .enableAuthority(IResolvable)
//  .enableHttps(java.lang.Boolean)
//  .enableHttps(IResolvable)
//  .expectNodeNum(java.lang.Number)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(CssClusterV1Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#name CssClusterV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig">CssClusterV1NodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.adminPass">adminPass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#admin_pass CssClusterV1#admin_pass}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.datastore">datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore">CssClusterV1Datastore</a></code> | datastore block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.enableAuthority">enableAuthority</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#enable_authority CssClusterV1#enable_authority}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.enableHttps">enableHttps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#enable_https CssClusterV1#enable_https}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.expectNodeNum">expectNodeNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#expect_node_num CssClusterV1#expect_node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#id CssClusterV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#tags CssClusterV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts">CssClusterV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#name CssClusterV1#name}.

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.nodeConfig"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig">CssClusterV1NodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#node_config CssClusterV1#node_config}

---

##### `adminPass`<sup>Optional</sup> <a name="adminPass" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.adminPass"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#admin_pass CssClusterV1#admin_pass}.

---

##### `datastore`<sup>Optional</sup> <a name="datastore" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.datastore"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore">CssClusterV1Datastore</a>

datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#datastore CssClusterV1#datastore}

---

##### `enableAuthority`<sup>Optional</sup> <a name="enableAuthority" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.enableAuthority"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#enable_authority CssClusterV1#enable_authority}.

---

##### `enableHttps`<sup>Optional</sup> <a name="enableHttps" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.enableHttps"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#enable_https CssClusterV1#enable_https}.

---

##### `expectNodeNum`<sup>Optional</sup> <a name="expectNodeNum" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.expectNodeNum"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#expect_node_num CssClusterV1#expect_node_num}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#id CssClusterV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#tags CssClusterV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts">CssClusterV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#timeouts CssClusterV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.putDatastore">putDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.putNodeConfig">putNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetAdminPass">resetAdminPass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetDatastore">resetDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetEnableAuthority">resetEnableAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetEnableHttps">resetEnableHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetExpectNodeNum">resetExpectNodeNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDatastore` <a name="putDatastore" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.putDatastore"></a>

```java
public void putDatastore(CssClusterV1Datastore value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.putDatastore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore">CssClusterV1Datastore</a>

---

##### `putNodeConfig` <a name="putNodeConfig" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.putNodeConfig"></a>

```java
public void putNodeConfig(CssClusterV1NodeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig">CssClusterV1NodeConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.putTimeouts"></a>

```java
public void putTimeouts(CssClusterV1Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts">CssClusterV1Timeouts</a>

---

##### `resetAdminPass` <a name="resetAdminPass" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetAdminPass"></a>

```java
public void resetAdminPass()
```

##### `resetDatastore` <a name="resetDatastore" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetDatastore"></a>

```java
public void resetDatastore()
```

##### `resetEnableAuthority` <a name="resetEnableAuthority" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetEnableAuthority"></a>

```java
public void resetEnableAuthority()
```

##### `resetEnableHttps` <a name="resetEnableHttps" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetEnableHttps"></a>

```java
public void resetEnableHttps()
```

##### `resetExpectNodeNum` <a name="resetExpectNodeNum" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetExpectNodeNum"></a>

```java
public void resetExpectNodeNum()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CssClusterV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_cluster_v1.CssClusterV1;

CssClusterV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_cluster_v1.CssClusterV1;

CssClusterV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_cluster_v1.CssClusterV1;

CssClusterV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_cluster_v1.CssClusterV1;

CssClusterV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CssClusterV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CssClusterV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CssClusterV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CssClusterV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CssClusterV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.datastore">datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference">CssClusterV1DatastoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference">CssClusterV1NodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.nodes">nodes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList">CssClusterV1NodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference">CssClusterV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.updated">updated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.adminPassInput">adminPassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.datastoreInput">datastoreInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore">CssClusterV1Datastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.enableAuthorityInput">enableAuthorityInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.enableHttpsInput">enableHttpsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.expectNodeNumInput">expectNodeNumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.nodeConfigInput">nodeConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig">CssClusterV1NodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts">CssClusterV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.adminPass">adminPass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.enableAuthority">enableAuthority</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.enableHttps">enableHttps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.expectNodeNum">expectNodeNum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.datastore"></a>

```java
public CssClusterV1DatastoreOutputReference getDatastore();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference">CssClusterV1DatastoreOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.nodeConfig"></a>

```java
public CssClusterV1NodeConfigOutputReference getNodeConfig();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference">CssClusterV1NodeConfigOutputReference</a>

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.nodes"></a>

```java
public CssClusterV1NodesList getNodes();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList">CssClusterV1NodesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.timeouts"></a>

```java
public CssClusterV1TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference">CssClusterV1TimeoutsOutputReference</a>

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.updated"></a>

```java
public java.lang.String getUpdated();
```

- *Type:* java.lang.String

---

##### `adminPassInput`<sup>Optional</sup> <a name="adminPassInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.adminPassInput"></a>

```java
public java.lang.String getAdminPassInput();
```

- *Type:* java.lang.String

---

##### `datastoreInput`<sup>Optional</sup> <a name="datastoreInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.datastoreInput"></a>

```java
public CssClusterV1Datastore getDatastoreInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore">CssClusterV1Datastore</a>

---

##### `enableAuthorityInput`<sup>Optional</sup> <a name="enableAuthorityInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.enableAuthorityInput"></a>

```java
public java.lang.Object getEnableAuthorityInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableHttpsInput`<sup>Optional</sup> <a name="enableHttpsInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.enableHttpsInput"></a>

```java
public java.lang.Object getEnableHttpsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expectNodeNumInput`<sup>Optional</sup> <a name="expectNodeNumInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.expectNodeNumInput"></a>

```java
public java.lang.Number getExpectNodeNumInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodeConfigInput`<sup>Optional</sup> <a name="nodeConfigInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.nodeConfigInput"></a>

```java
public CssClusterV1NodeConfig getNodeConfigInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig">CssClusterV1NodeConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts">CssClusterV1Timeouts</a>

---

##### `adminPass`<sup>Required</sup> <a name="adminPass" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.adminPass"></a>

```java
public java.lang.String getAdminPass();
```

- *Type:* java.lang.String

---

##### `enableAuthority`<sup>Required</sup> <a name="enableAuthority" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.enableAuthority"></a>

```java
public java.lang.Object getEnableAuthority();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableHttps`<sup>Required</sup> <a name="enableHttps" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.enableHttps"></a>

```java
public java.lang.Object getEnableHttps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expectNodeNum`<sup>Required</sup> <a name="expectNodeNum" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.expectNodeNum"></a>

```java
public java.lang.Number getExpectNodeNum();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CssClusterV1Config <a name="CssClusterV1Config" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_cluster_v1.CssClusterV1Config;

CssClusterV1Config.builder()
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
    .name(java.lang.String)
    .nodeConfig(CssClusterV1NodeConfig)
//  .adminPass(java.lang.String)
//  .datastore(CssClusterV1Datastore)
//  .enableAuthority(java.lang.Boolean)
//  .enableAuthority(IResolvable)
//  .enableHttps(java.lang.Boolean)
//  .enableHttps(IResolvable)
//  .expectNodeNum(java.lang.Number)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(CssClusterV1Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#name CssClusterV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig">CssClusterV1NodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.adminPass">adminPass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#admin_pass CssClusterV1#admin_pass}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.datastore">datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore">CssClusterV1Datastore</a></code> | datastore block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.enableAuthority">enableAuthority</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#enable_authority CssClusterV1#enable_authority}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.enableHttps">enableHttps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#enable_https CssClusterV1#enable_https}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.expectNodeNum">expectNodeNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#expect_node_num CssClusterV1#expect_node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#id CssClusterV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#tags CssClusterV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts">CssClusterV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#name CssClusterV1#name}.

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.nodeConfig"></a>

```java
public CssClusterV1NodeConfig getNodeConfig();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig">CssClusterV1NodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#node_config CssClusterV1#node_config}

---

##### `adminPass`<sup>Optional</sup> <a name="adminPass" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.adminPass"></a>

```java
public java.lang.String getAdminPass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#admin_pass CssClusterV1#admin_pass}.

---

##### `datastore`<sup>Optional</sup> <a name="datastore" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.datastore"></a>

```java
public CssClusterV1Datastore getDatastore();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore">CssClusterV1Datastore</a>

datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#datastore CssClusterV1#datastore}

---

##### `enableAuthority`<sup>Optional</sup> <a name="enableAuthority" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.enableAuthority"></a>

```java
public java.lang.Object getEnableAuthority();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#enable_authority CssClusterV1#enable_authority}.

---

##### `enableHttps`<sup>Optional</sup> <a name="enableHttps" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.enableHttps"></a>

```java
public java.lang.Object getEnableHttps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#enable_https CssClusterV1#enable_https}.

---

##### `expectNodeNum`<sup>Optional</sup> <a name="expectNodeNum" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.expectNodeNum"></a>

```java
public java.lang.Number getExpectNodeNum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#expect_node_num CssClusterV1#expect_node_num}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#id CssClusterV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#tags CssClusterV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Config.property.timeouts"></a>

```java
public CssClusterV1Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts">CssClusterV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#timeouts CssClusterV1#timeouts}

---

### CssClusterV1Datastore <a name="CssClusterV1Datastore" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_cluster_v1.CssClusterV1Datastore;

CssClusterV1Datastore.builder()
//  .type(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#type CssClusterV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#version CssClusterV1#version}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#type CssClusterV1#type}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#version CssClusterV1#version}.

---

### CssClusterV1NodeConfig <a name="CssClusterV1NodeConfig" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_cluster_v1.CssClusterV1NodeConfig;

CssClusterV1NodeConfig.builder()
    .flavor(java.lang.String)
    .networkInfo(CssClusterV1NodeConfigNetworkInfo)
    .volume(CssClusterV1NodeConfigVolume)
//  .availabilityZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig.property.flavor">flavor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#flavor CssClusterV1#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig.property.networkInfo">networkInfo</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo">CssClusterV1NodeConfigNetworkInfo</a></code> | network_info block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume">CssClusterV1NodeConfigVolume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#availability_zone CssClusterV1#availability_zone}. |

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig.property.flavor"></a>

```java
public java.lang.String getFlavor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#flavor CssClusterV1#flavor}.

---

##### `networkInfo`<sup>Required</sup> <a name="networkInfo" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig.property.networkInfo"></a>

```java
public CssClusterV1NodeConfigNetworkInfo getNetworkInfo();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo">CssClusterV1NodeConfigNetworkInfo</a>

network_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#network_info CssClusterV1#network_info}

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig.property.volume"></a>

```java
public CssClusterV1NodeConfigVolume getVolume();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume">CssClusterV1NodeConfigVolume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#volume CssClusterV1#volume}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#availability_zone CssClusterV1#availability_zone}.

---

### CssClusterV1NodeConfigNetworkInfo <a name="CssClusterV1NodeConfigNetworkInfo" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_cluster_v1.CssClusterV1NodeConfigNetworkInfo;

CssClusterV1NodeConfigNetworkInfo.builder()
    .networkId(java.lang.String)
    .securityGroupId(java.lang.String)
    .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo.property.networkId">networkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#network_id CssClusterV1#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#security_group_id CssClusterV1#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#vpc_id CssClusterV1#vpc_id}. |

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo.property.networkId"></a>

```java
public java.lang.String getNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#network_id CssClusterV1#network_id}.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#security_group_id CssClusterV1#security_group_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#vpc_id CssClusterV1#vpc_id}.

---

### CssClusterV1NodeConfigVolume <a name="CssClusterV1NodeConfigVolume" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_cluster_v1.CssClusterV1NodeConfigVolume;

CssClusterV1NodeConfigVolume.builder()
    .size(java.lang.Number)
    .volumeType(java.lang.String)
//  .encryptionKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#size CssClusterV1#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#volume_type CssClusterV1#volume_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume.property.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#encryption_key CssClusterV1#encryption_key}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#size CssClusterV1#size}.

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#volume_type CssClusterV1#volume_type}.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume.property.encryptionKey"></a>

```java
public java.lang.String getEncryptionKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#encryption_key CssClusterV1#encryption_key}.

---

### CssClusterV1Nodes <a name="CssClusterV1Nodes" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Nodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Nodes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_cluster_v1.CssClusterV1Nodes;

CssClusterV1Nodes.builder()
    .build();
```


### CssClusterV1Timeouts <a name="CssClusterV1Timeouts" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_cluster_v1.CssClusterV1Timeouts;

CssClusterV1Timeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#create CssClusterV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#update CssClusterV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#create CssClusterV1#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/css_cluster_v1#update CssClusterV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CssClusterV1DatastoreOutputReference <a name="CssClusterV1DatastoreOutputReference" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_cluster_v1.CssClusterV1DatastoreOutputReference;

new CssClusterV1DatastoreOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore">CssClusterV1Datastore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1DatastoreOutputReference.property.internalValue"></a>

```java
public CssClusterV1Datastore getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Datastore">CssClusterV1Datastore</a>

---


### CssClusterV1NodeConfigNetworkInfoOutputReference <a name="CssClusterV1NodeConfigNetworkInfoOutputReference" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_cluster_v1.CssClusterV1NodeConfigNetworkInfoOutputReference;

new CssClusterV1NodeConfigNetworkInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.networkIdInput">networkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.networkId">networkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo">CssClusterV1NodeConfigNetworkInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkIdInput`<sup>Optional</sup> <a name="networkIdInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.networkIdInput"></a>

```java
public java.lang.String getNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.securityGroupIdInput"></a>

```java
public java.lang.String getSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.networkId"></a>

```java
public java.lang.String getNetworkId();
```

- *Type:* java.lang.String

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference.property.internalValue"></a>

```java
public CssClusterV1NodeConfigNetworkInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo">CssClusterV1NodeConfigNetworkInfo</a>

---


### CssClusterV1NodeConfigOutputReference <a name="CssClusterV1NodeConfigOutputReference" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_cluster_v1.CssClusterV1NodeConfigOutputReference;

new CssClusterV1NodeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.putNetworkInfo">putNetworkInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkInfo` <a name="putNetworkInfo" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.putNetworkInfo"></a>

```java
public void putNetworkInfo(CssClusterV1NodeConfigNetworkInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.putNetworkInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo">CssClusterV1NodeConfigNetworkInfo</a>

---

##### `putVolume` <a name="putVolume" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.putVolume"></a>

```java
public void putVolume(CssClusterV1NodeConfigVolume value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.putVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume">CssClusterV1NodeConfigVolume</a>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.networkInfo">networkInfo</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference">CssClusterV1NodeConfigNetworkInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference">CssClusterV1NodeConfigVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.flavorInput">flavorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.networkInfoInput">networkInfoInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo">CssClusterV1NodeConfigNetworkInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.volumeInput">volumeInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume">CssClusterV1NodeConfigVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.flavor">flavor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig">CssClusterV1NodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkInfo`<sup>Required</sup> <a name="networkInfo" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.networkInfo"></a>

```java
public CssClusterV1NodeConfigNetworkInfoOutputReference getNetworkInfo();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfoOutputReference">CssClusterV1NodeConfigNetworkInfoOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.volume"></a>

```java
public CssClusterV1NodeConfigVolumeOutputReference getVolume();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference">CssClusterV1NodeConfigVolumeOutputReference</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `flavorInput`<sup>Optional</sup> <a name="flavorInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.flavorInput"></a>

```java
public java.lang.String getFlavorInput();
```

- *Type:* java.lang.String

---

##### `networkInfoInput`<sup>Optional</sup> <a name="networkInfoInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.networkInfoInput"></a>

```java
public CssClusterV1NodeConfigNetworkInfo getNetworkInfoInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigNetworkInfo">CssClusterV1NodeConfigNetworkInfo</a>

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.volumeInput"></a>

```java
public CssClusterV1NodeConfigVolume getVolumeInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume">CssClusterV1NodeConfigVolume</a>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.flavor"></a>

```java
public java.lang.String getFlavor();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigOutputReference.property.internalValue"></a>

```java
public CssClusterV1NodeConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfig">CssClusterV1NodeConfig</a>

---


### CssClusterV1NodeConfigVolumeOutputReference <a name="CssClusterV1NodeConfigVolumeOutputReference" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_cluster_v1.CssClusterV1NodeConfigVolumeOutputReference;

new CssClusterV1NodeConfigVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.resetEncryptionKey"></a>

```java
public void resetEncryptionKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume">CssClusterV1NodeConfigVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.encryptionKeyInput"></a>

```java
public java.lang.String getEncryptionKeyInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.encryptionKey"></a>

```java
public java.lang.String getEncryptionKey();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolumeOutputReference.property.internalValue"></a>

```java
public CssClusterV1NodeConfigVolume getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodeConfigVolume">CssClusterV1NodeConfigVolume</a>

---


### CssClusterV1NodesList <a name="CssClusterV1NodesList" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_cluster_v1.CssClusterV1NodesList;

new CssClusterV1NodesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.get"></a>

```java
public CssClusterV1NodesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CssClusterV1NodesOutputReference <a name="CssClusterV1NodesOutputReference" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_cluster_v1.CssClusterV1NodesOutputReference;

new CssClusterV1NodesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Nodes">CssClusterV1Nodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1NodesOutputReference.property.internalValue"></a>

```java
public CssClusterV1Nodes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Nodes">CssClusterV1Nodes</a>

---


### CssClusterV1TimeoutsOutputReference <a name="CssClusterV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.css_cluster_v1.CssClusterV1TimeoutsOutputReference;

new CssClusterV1TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts">CssClusterV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cssClusterV1.CssClusterV1Timeouts">CssClusterV1Timeouts</a>

---



