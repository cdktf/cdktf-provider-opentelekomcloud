# `dataOpentelekomcloudCceAddonTemplatesV3` Submodule <a name="`dataOpentelekomcloudCceAddonTemplatesV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCceAddonTemplatesV3 <a name="DataOpentelekomcloudCceAddonTemplatesV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cce_addon_templates_v3 opentelekomcloud_cce_addon_templates_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_cce_addon_templates_v3.DataOpentelekomcloudCceAddonTemplatesV3;

DataOpentelekomcloudCceAddonTemplatesV3.Builder.create(Construct scope, java.lang.String id)
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
    .addonName(java.lang.String)
    .clusterVersion(java.lang.String)
//  .clusterType(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.addonName">addonName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cce_addon_templates_v3#addon_name DataOpentelekomcloudCceAddonTemplatesV3#addon_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.clusterVersion">clusterVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cce_addon_templates_v3#cluster_version DataOpentelekomcloudCceAddonTemplatesV3#cluster_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.clusterType">clusterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cce_addon_templates_v3#cluster_type DataOpentelekomcloudCceAddonTemplatesV3#cluster_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cce_addon_templates_v3#id DataOpentelekomcloudCceAddonTemplatesV3#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addonName`<sup>Required</sup> <a name="addonName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.addonName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cce_addon_templates_v3#addon_name DataOpentelekomcloudCceAddonTemplatesV3#addon_name}.

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.clusterVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cce_addon_templates_v3#cluster_version DataOpentelekomcloudCceAddonTemplatesV3#cluster_version}.

---

##### `clusterType`<sup>Optional</sup> <a name="clusterType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.clusterType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cce_addon_templates_v3#cluster_type DataOpentelekomcloudCceAddonTemplatesV3#cluster_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cce_addon_templates_v3#id DataOpentelekomcloudCceAddonTemplatesV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.resetClusterType">resetClusterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetClusterType` <a name="resetClusterType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.resetClusterType"></a>

```java
public void resetClusterType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCceAddonTemplatesV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_cce_addon_templates_v3.DataOpentelekomcloudCceAddonTemplatesV3;

DataOpentelekomcloudCceAddonTemplatesV3.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_cce_addon_templates_v3.DataOpentelekomcloudCceAddonTemplatesV3;

DataOpentelekomcloudCceAddonTemplatesV3.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_cce_addon_templates_v3.DataOpentelekomcloudCceAddonTemplatesV3;

DataOpentelekomcloudCceAddonTemplatesV3.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_cce_addon_templates_v3.DataOpentelekomcloudCceAddonTemplatesV3;

DataOpentelekomcloudCceAddonTemplatesV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOpentelekomcloudCceAddonTemplatesV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOpentelekomcloudCceAddonTemplatesV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOpentelekomcloudCceAddonTemplatesV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOpentelekomcloudCceAddonTemplatesV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cce_addon_templates_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCceAddonTemplatesV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.addons">addons</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList">DataOpentelekomcloudCceAddonTemplatesV3AddonsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.addonNameInput">addonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.clusterTypeInput">clusterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.clusterVersionInput">clusterVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.addonName">addonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.clusterType">clusterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.clusterVersion">clusterVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `addons`<sup>Required</sup> <a name="addons" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.addons"></a>

```java
public DataOpentelekomcloudCceAddonTemplatesV3AddonsList getAddons();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList">DataOpentelekomcloudCceAddonTemplatesV3AddonsList</a>

---

##### `addonNameInput`<sup>Optional</sup> <a name="addonNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.addonNameInput"></a>

```java
public java.lang.String getAddonNameInput();
```

- *Type:* java.lang.String

---

##### `clusterTypeInput`<sup>Optional</sup> <a name="clusterTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.clusterTypeInput"></a>

```java
public java.lang.String getClusterTypeInput();
```

- *Type:* java.lang.String

---

##### `clusterVersionInput`<sup>Optional</sup> <a name="clusterVersionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.clusterVersionInput"></a>

```java
public java.lang.String getClusterVersionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `addonName`<sup>Required</sup> <a name="addonName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.addonName"></a>

```java
public java.lang.String getAddonName();
```

- *Type:* java.lang.String

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.clusterType"></a>

```java
public java.lang.String getClusterType();
```

- *Type:* java.lang.String

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.clusterVersion"></a>

```java
public java.lang.String getClusterVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCceAddonTemplatesV3Addons <a name="DataOpentelekomcloudCceAddonTemplatesV3Addons" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Addons"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Addons.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_cce_addon_templates_v3.DataOpentelekomcloudCceAddonTemplatesV3Addons;

DataOpentelekomcloudCceAddonTemplatesV3Addons.builder()
    .build();
```


### DataOpentelekomcloudCceAddonTemplatesV3Config <a name="DataOpentelekomcloudCceAddonTemplatesV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_cce_addon_templates_v3.DataOpentelekomcloudCceAddonTemplatesV3Config;

DataOpentelekomcloudCceAddonTemplatesV3Config.builder()
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
    .addonName(java.lang.String)
    .clusterVersion(java.lang.String)
//  .clusterType(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.addonName">addonName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cce_addon_templates_v3#addon_name DataOpentelekomcloudCceAddonTemplatesV3#addon_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.clusterVersion">clusterVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cce_addon_templates_v3#cluster_version DataOpentelekomcloudCceAddonTemplatesV3#cluster_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.clusterType">clusterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cce_addon_templates_v3#cluster_type DataOpentelekomcloudCceAddonTemplatesV3#cluster_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cce_addon_templates_v3#id DataOpentelekomcloudCceAddonTemplatesV3#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addonName`<sup>Required</sup> <a name="addonName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.addonName"></a>

```java
public java.lang.String getAddonName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cce_addon_templates_v3#addon_name DataOpentelekomcloudCceAddonTemplatesV3#addon_name}.

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.clusterVersion"></a>

```java
public java.lang.String getClusterVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cce_addon_templates_v3#cluster_version DataOpentelekomcloudCceAddonTemplatesV3#cluster_version}.

---

##### `clusterType`<sup>Optional</sup> <a name="clusterType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.clusterType"></a>

```java
public java.lang.String getClusterType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cce_addon_templates_v3#cluster_type DataOpentelekomcloudCceAddonTemplatesV3#cluster_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cce_addon_templates_v3#id DataOpentelekomcloudCceAddonTemplatesV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudCceAddonTemplatesV3AddonsList <a name="DataOpentelekomcloudCceAddonTemplatesV3AddonsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_cce_addon_templates_v3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList;

new DataOpentelekomcloudCceAddonTemplatesV3AddonsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.get"></a>

```java
public DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference <a name="DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_cce_addon_templates_v3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference;

new DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.addonVersion">addonVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.clusterIp">clusterIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.eulerosVersion">eulerosVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.imageVersion">imageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.obsUrl">obsUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.platform">platform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.swrAddr">swrAddr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.swrUser">swrUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Addons">DataOpentelekomcloudCceAddonTemplatesV3Addons</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addonVersion`<sup>Required</sup> <a name="addonVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.addonVersion"></a>

```java
public java.lang.String getAddonVersion();
```

- *Type:* java.lang.String

---

##### `clusterIp`<sup>Required</sup> <a name="clusterIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.clusterIp"></a>

```java
public java.lang.String getClusterIp();
```

- *Type:* java.lang.String

---

##### `eulerosVersion`<sup>Required</sup> <a name="eulerosVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.eulerosVersion"></a>

```java
public java.lang.String getEulerosVersion();
```

- *Type:* java.lang.String

---

##### `imageVersion`<sup>Required</sup> <a name="imageVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.imageVersion"></a>

```java
public java.lang.String getImageVersion();
```

- *Type:* java.lang.String

---

##### `obsUrl`<sup>Required</sup> <a name="obsUrl" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.obsUrl"></a>

```java
public java.lang.String getObsUrl();
```

- *Type:* java.lang.String

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

---

##### `swrAddr`<sup>Required</sup> <a name="swrAddr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.swrAddr"></a>

```java
public java.lang.String getSwrAddr();
```

- *Type:* java.lang.String

---

##### `swrUser`<sup>Required</sup> <a name="swrUser" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.swrUser"></a>

```java
public java.lang.String getSwrUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3AddonsOutputReference.property.internalValue"></a>

```java
public DataOpentelekomcloudCceAddonTemplatesV3Addons getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCceAddonTemplatesV3.DataOpentelekomcloudCceAddonTemplatesV3Addons">DataOpentelekomcloudCceAddonTemplatesV3Addons</a>

---



