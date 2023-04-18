# `opentelekomcloud_smn_topic_attribute_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_smn_topic_attribute_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/smn_topic_attribute_v2).

# `smnTopicAttributeV2` Submodule <a name="`smnTopicAttributeV2` Submodule" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmnTopicAttributeV2 <a name="SmnTopicAttributeV2" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/smn_topic_attribute_v2 opentelekomcloud_smn_topic_attribute_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new SmnTopicAttributeV2(Construct Scope, string Id, SmnTopicAttributeV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config">SmnTopicAttributeV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config">SmnTopicAttributeV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

SmnTopicAttributeV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

SmnTopicAttributeV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

SmnTopicAttributeV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.attributeNameInput">AttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.topicAttributeInput">TopicAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.topicUrnInput">TopicUrnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.attributeName">AttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.topicAttribute">TopicAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.topicUrn">TopicUrn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.attributeNameInput"></a>

```csharp
public string AttributeNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TopicAttributeInput`<sup>Optional</sup> <a name="TopicAttributeInput" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.topicAttributeInput"></a>

```csharp
public string TopicAttributeInput { get; }
```

- *Type:* string

---

##### `TopicUrnInput`<sup>Optional</sup> <a name="TopicUrnInput" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.topicUrnInput"></a>

```csharp
public string TopicUrnInput { get; }
```

- *Type:* string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.attributeName"></a>

```csharp
public string AttributeName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TopicAttribute`<sup>Required</sup> <a name="TopicAttribute" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.topicAttribute"></a>

```csharp
public string TopicAttribute { get; }
```

- *Type:* string

---

##### `TopicUrn`<sup>Required</sup> <a name="TopicUrn" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.topicUrn"></a>

```csharp
public string TopicUrn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SmnTopicAttributeV2Config <a name="SmnTopicAttributeV2Config" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new SmnTopicAttributeV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AttributeName,
    string TopicAttribute,
    string TopicUrn,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config.property.attributeName">AttributeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/smn_topic_attribute_v2#attribute_name SmnTopicAttributeV2#attribute_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config.property.topicAttribute">TopicAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/smn_topic_attribute_v2#topic_attribute SmnTopicAttributeV2#topic_attribute}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config.property.topicUrn">TopicUrn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/smn_topic_attribute_v2#topic_urn SmnTopicAttributeV2#topic_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/smn_topic_attribute_v2#id SmnTopicAttributeV2#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config.property.attributeName"></a>

```csharp
public string AttributeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/smn_topic_attribute_v2#attribute_name SmnTopicAttributeV2#attribute_name}.

---

##### `TopicAttribute`<sup>Required</sup> <a name="TopicAttribute" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config.property.topicAttribute"></a>

```csharp
public string TopicAttribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/smn_topic_attribute_v2#topic_attribute SmnTopicAttributeV2#topic_attribute}.

---

##### `TopicUrn`<sup>Required</sup> <a name="TopicUrn" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config.property.topicUrn"></a>

```csharp
public string TopicUrn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/smn_topic_attribute_v2#topic_urn SmnTopicAttributeV2#topic_urn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.smnTopicAttributeV2.SmnTopicAttributeV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/smn_topic_attribute_v2#id SmnTopicAttributeV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



