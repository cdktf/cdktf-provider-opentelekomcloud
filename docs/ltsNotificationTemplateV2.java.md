# `ltsNotificationTemplateV2` Submodule <a name="`ltsNotificationTemplateV2` Submodule" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LtsNotificationTemplateV2 <a name="LtsNotificationTemplateV2" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2 opentelekomcloud_lts_notification_template_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_notification_template_v2.LtsNotificationTemplateV2;

LtsNotificationTemplateV2.Builder.create(Construct scope, java.lang.String id)
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
    .language(java.lang.String)
    .name(java.lang.String)
    .source(java.lang.String)
    .templates(IResolvable)
    .templates(java.util.List<LtsNotificationTemplateV2Templates>)
//  .description(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.language">language</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#language LtsNotificationTemplateV2#language}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#name LtsNotificationTemplateV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#source LtsNotificationTemplateV2#source}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.templates">templates</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates">LtsNotificationTemplateV2Templates</a>></code> | templates block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#description LtsNotificationTemplateV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#id LtsNotificationTemplateV2#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.language"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#language LtsNotificationTemplateV2#language}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#name LtsNotificationTemplateV2#name}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.source"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#source LtsNotificationTemplateV2#source}.

---

##### `templates`<sup>Required</sup> <a name="templates" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.templates"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates">LtsNotificationTemplateV2Templates</a>>

templates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#templates LtsNotificationTemplateV2#templates}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#description LtsNotificationTemplateV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#id LtsNotificationTemplateV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.putTemplates">putTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTemplates` <a name="putTemplates" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.putTemplates"></a>

```java
public void putTemplates(IResolvable OR java.util.List<LtsNotificationTemplateV2Templates> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.putTemplates.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates">LtsNotificationTemplateV2Templates</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LtsNotificationTemplateV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_notification_template_v2.LtsNotificationTemplateV2;

LtsNotificationTemplateV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_notification_template_v2.LtsNotificationTemplateV2;

LtsNotificationTemplateV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_notification_template_v2.LtsNotificationTemplateV2;

LtsNotificationTemplateV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_notification_template_v2.LtsNotificationTemplateV2;

LtsNotificationTemplateV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LtsNotificationTemplateV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LtsNotificationTemplateV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LtsNotificationTemplateV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LtsNotificationTemplateV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LtsNotificationTemplateV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.templates">templates</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList">LtsNotificationTemplateV2TemplatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.languageInput">languageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.templatesInput">templatesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates">LtsNotificationTemplateV2Templates</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.language">language</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `templates`<sup>Required</sup> <a name="templates" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.templates"></a>

```java
public LtsNotificationTemplateV2TemplatesList getTemplates();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList">LtsNotificationTemplateV2TemplatesList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.languageInput"></a>

```java
public java.lang.String getLanguageInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `templatesInput`<sup>Optional</sup> <a name="templatesInput" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.templatesInput"></a>

```java
public java.lang.Object getTemplatesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates">LtsNotificationTemplateV2Templates</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LtsNotificationTemplateV2Config <a name="LtsNotificationTemplateV2Config" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_notification_template_v2.LtsNotificationTemplateV2Config;

LtsNotificationTemplateV2Config.builder()
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
    .language(java.lang.String)
    .name(java.lang.String)
    .source(java.lang.String)
    .templates(IResolvable)
    .templates(java.util.List<LtsNotificationTemplateV2Templates>)
//  .description(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.language">language</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#language LtsNotificationTemplateV2#language}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#name LtsNotificationTemplateV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#source LtsNotificationTemplateV2#source}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.templates">templates</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates">LtsNotificationTemplateV2Templates</a>></code> | templates block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#description LtsNotificationTemplateV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#id LtsNotificationTemplateV2#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#language LtsNotificationTemplateV2#language}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#name LtsNotificationTemplateV2#name}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#source LtsNotificationTemplateV2#source}.

---

##### `templates`<sup>Required</sup> <a name="templates" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.templates"></a>

```java
public java.lang.Object getTemplates();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates">LtsNotificationTemplateV2Templates</a>>

templates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#templates LtsNotificationTemplateV2#templates}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#description LtsNotificationTemplateV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#id LtsNotificationTemplateV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### LtsNotificationTemplateV2Templates <a name="LtsNotificationTemplateV2Templates" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_notification_template_v2.LtsNotificationTemplateV2Templates;

LtsNotificationTemplateV2Templates.builder()
    .content(java.lang.String)
    .subType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#content LtsNotificationTemplateV2#content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates.property.subType">subType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#sub_type LtsNotificationTemplateV2#sub_type}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#content LtsNotificationTemplateV2#content}.

---

##### `subType`<sup>Required</sup> <a name="subType" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates.property.subType"></a>

```java
public java.lang.String getSubType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/lts_notification_template_v2#sub_type LtsNotificationTemplateV2#sub_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LtsNotificationTemplateV2TemplatesList <a name="LtsNotificationTemplateV2TemplatesList" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_notification_template_v2.LtsNotificationTemplateV2TemplatesList;

new LtsNotificationTemplateV2TemplatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.get"></a>

```java
public LtsNotificationTemplateV2TemplatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates">LtsNotificationTemplateV2Templates</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates">LtsNotificationTemplateV2Templates</a>>

---


### LtsNotificationTemplateV2TemplatesOutputReference <a name="LtsNotificationTemplateV2TemplatesOutputReference" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lts_notification_template_v2.LtsNotificationTemplateV2TemplatesOutputReference;

new LtsNotificationTemplateV2TemplatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.subTypeInput">subTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.subType">subType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates">LtsNotificationTemplateV2Templates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `subTypeInput`<sup>Optional</sup> <a name="subTypeInput" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.subTypeInput"></a>

```java
public java.lang.String getSubTypeInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `subType`<sup>Required</sup> <a name="subType" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.subType"></a>

```java
public java.lang.String getSubType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2TemplatesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.ltsNotificationTemplateV2.LtsNotificationTemplateV2Templates">LtsNotificationTemplateV2Templates</a>

---



