# `opentelekomcloud_identity_credential_v3`

Refer to the Terraform Registory for docs: [`opentelekomcloud_identity_credential_v3`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/identity_credential_v3).

# `identityCredentialV3` Submodule <a name="`identityCredentialV3` Submodule" id="@cdktf/provider-opentelekomcloud.identityCredentialV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityCredentialV3 <a name="IdentityCredentialV3" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/identity_credential_v3 opentelekomcloud_identity_credential_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new IdentityCredentialV3(Construct Scope, string Id, IdentityCredentialV3Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config">IdentityCredentialV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config">IdentityCredentialV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.resetPgpKey">ResetPgpKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPgpKey` <a name="ResetPgpKey" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.resetPgpKey"></a>

```csharp
private void ResetPgpKey()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.resetUserId"></a>

```csharp
private void ResetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

IdentityCredentialV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

IdentityCredentialV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

IdentityCredentialV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.access">Access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.keyFingerprint">KeyFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.lastUseTime">LastUseTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.pgpKeyInput">PgpKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.pgpKey">PgpKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.userId">UserId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.access"></a>

```csharp
public string Access { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `KeyFingerprint`<sup>Required</sup> <a name="KeyFingerprint" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.keyFingerprint"></a>

```csharp
public string KeyFingerprint { get; }
```

- *Type:* string

---

##### `LastUseTime`<sup>Required</sup> <a name="LastUseTime" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.lastUseTime"></a>

```csharp
public string LastUseTime { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PgpKeyInput`<sup>Optional</sup> <a name="PgpKeyInput" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.pgpKeyInput"></a>

```csharp
public string PgpKeyInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PgpKey`<sup>Required</sup> <a name="PgpKey" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.pgpKey"></a>

```csharp
public string PgpKey { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityCredentialV3Config <a name="IdentityCredentialV3Config" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new IdentityCredentialV3Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Description = null,
    string Id = null,
    string PgpKey = null,
    string Status = null,
    string UserId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/identity_credential_v3#description IdentityCredentialV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/identity_credential_v3#id IdentityCredentialV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.property.pgpKey">PgpKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/identity_credential_v3#pgp_key IdentityCredentialV3#pgp_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/identity_credential_v3#status IdentityCredentialV3#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.property.userId">UserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/identity_credential_v3#user_id IdentityCredentialV3#user_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/identity_credential_v3#description IdentityCredentialV3#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/identity_credential_v3#id IdentityCredentialV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PgpKey`<sup>Optional</sup> <a name="PgpKey" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.property.pgpKey"></a>

```csharp
public string PgpKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/identity_credential_v3#pgp_key IdentityCredentialV3#pgp_key}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/identity_credential_v3#status IdentityCredentialV3#status}.

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.identityCredentialV3.IdentityCredentialV3Config.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/identity_credential_v3#user_id IdentityCredentialV3#user_id}.

---



